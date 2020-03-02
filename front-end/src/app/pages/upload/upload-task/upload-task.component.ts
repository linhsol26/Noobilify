import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { MusicData } from 'src/app/models/music-data.model';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() musicFile: File;
  @Input() imgFile: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;

  songURL: string;
  imgURL: string;

  constructor(
    private storage: AngularFireStorage,
    private cloudService: CloudService
  ) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    if (
        this.imgFile.type !== null &&
        this.musicFile.type !== null &&
        this.cloudService.name.value !== '' &&
        this.cloudService.artist.value !== '' &&
        this.cloudService.singer.value !== '') {
      // The storage path
      const musicPath = `music/${Date.now()}_${this.musicFile.name}`;
      const imgPath = `images/${Date.now()}_${this.imgFile.name}`;

      // Reference to storage bucket
      const musicRef = this.storage.ref(musicPath);
      const imgRef = this.storage.ref(imgPath);

      // The main task
      this.storage.upload(imgPath, this.imgFile);
      this.task = this.storage.upload(musicPath, this.musicFile);

      // Progress monitoring
      this.percentage = this.task.percentageChanges();

      this.snapshot = this.task.snapshotChanges().pipe(
        tap(console.log),
        // The file's download URL
        finalize( async () =>  {
          this.songURL = await musicRef.getDownloadURL().toPromise();
          this.imgURL = await imgRef.getDownloadURL().toPromise();
          this.cloudService.updateMusicData({
            name: this.cloudService.name.value,
            singer: this.cloudService.singer.value,
            artist: this.cloudService.artist.value,
            musicURL: this.songURL,
            imgURL: this.imgURL,
            musicPath: `${musicPath}`,
            imgPath: `${imgPath}`
          } as MusicData).then(() => {
            this.cloudService.name.reset();
            this.cloudService.singer.reset();
            this.cloudService.artist.reset();
            location.reload();
          });
        }),
      );
    }
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  getInt(value) {
    return Number.parseInt(value, 10);
  }

}
