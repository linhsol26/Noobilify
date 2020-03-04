import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { CloudService } from "src/app/services/cloud.service";
import { NbSidebarService } from "@nebular/theme";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit, OnDestroy {
  user: any;
  playlist: Array<any> = [
    {
      title: "Liked Song",
      icon: "heart-outline",
      link: ["library/liked-song"]
    }
  ];

  menuItems = [
    {
      title: "Home",
      icon: "home-outline",
      link: ["home"]
    },
    {
      title: "Search",
      icon: "search-outline",
      link: ["search"]
    },
    {
      title: "Library",
      icon: "book-outline",
      link: ["library"],
      hidden: true
    },
    {
      title: "Playlist",
      icon: "headphones-outline",
      hidden: true,
      children: this.playlist
    },
    {
      title: "Upload music",
      icon: "cloud-upload-outline",
      link: ["upload"],
      hidden: true
    }
  ];

  isCompact = false;

  constructor(
    private authService: AuthService,
    private cloudService: CloudService,
    private sidebarService: NbSidebarService
  ) {
    this.checkUserIsLogin();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.checkUserIsLogin().unsubscribe();
  }

  checkUserIsLogin() {
    return this.authService.user$.subscribe(userData => {
      this.user = userData;
      console.log(this.user);
      if (this.user !== null) {
        this.cloudService.getAllPlaylist(this.user).subscribe(data => {
          this.playlist.length = 1;
          data.forEach(x => {
            this.playlist.push(x.payload.doc.data());
          });
        });

        this.menuItems.forEach(item => (item.hidden = false));
      } else {
        this.menuItems.forEach(item => {
          if (item.title === "Home" || item.title === "Search") {
            item.hidden = false;
          } else {
            item.hidden = true;
          }
        });
      }
    });
  }

  changeSidaBar() {
    if (this.isCompact === true) {
      this.sidebarService.compact();
      this.isCompact = false;
    } else {
      this.sidebarService.expand();
      this.isCompact = true;
    }
  }
}
