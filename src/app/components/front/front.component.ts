import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EmailService } from '../../core/services/emailservice';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectItem } from 'src/app/core/entities/project-item';
import { SwiftTruckSnackbarComponent } from 'src/app/layout/snackbar/swift-truck-snackbar/swift-truck-snackbar.component';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FrontComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;

  @ViewChild('tabs', {static: false}) tabs;

  firedemail: boolean;

  projects: ProjectItem[];

  SwiftTruckScene: SwiftTruckScenes[] = [
    { scenename: 'Registration' },
    { scenename: 'Broadcasting' },
    { scenename: 'Maps' },
    { scenename: 'Orders' },
    { scenename: 'Payments' },
    { scenename: 'Media' }
  ];

  tiles: TechieUsed[] = [
    {
      techlogo: '../../assets/techies/angular-logo.png',
      techname: 'Angular 8',
      techurl: 'https://angular.io/'
    },
    {
      techlogo: '../../assets/techies/typescript-logo.svg',
      techname: 'TypeScript',
      techurl: 'https://www.typescriptlang.org/'
    },
    {
      techlogo: '../../assets/techies/angular-material-logo.png',
      techname: 'Angular Material',
      techurl: 'https://material.angular.io'
    },
    {
      techlogo: '../../assets/techies/bootstrap-logo.svg',
      techname: 'Bootstrap 4',
      techurl: 'https://getbootstrap.com'
    },
    {
      techlogo: '../../assets/techies/drupal-logo.svg',
      techname: 'Drupal',
      techurl: 'https://www.drupal.org/'
    },
    {
      techlogo: '../../assets/techies/php-logo.svg',
      techname: 'PHP',
      techurl: 'https://www.php.net/'
    },
    {
      techlogo: '../../assets/techies/rest-logo.png',
      techname: 'REST',
      techurl: 'https://restfulapi.net/'
    },
    {
      techlogo: '../../assets/techies/html5-logo.svg',
      techname: 'HTML5',
      techurl: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
    },
    {
      techlogo: '../../assets/techies/css3-logo.svg',
      techname: 'CSS3',
      techurl: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      techlogo: '../../assets/techies/javascript-logo.svg',
      techname: 'JavaScript',
      techurl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      techlogo: '../../assets/techies/npmjs-logo.svg',
      techname: 'NPM',
      techurl: 'https://www.npmjs.com/'
    },
    {
      techlogo: '../../assets/techies/visualstudio-code-logo.svg',
      techname: 'Visual Studio Code',
      techurl: 'https://code.visualstudio.com/'
    },
    {
      techlogo: '../../assets/techies/git-scm-logo.svg',
      techname: 'Git',
      techurl: 'https://git-scm.com/'
    },
    {
      techlogo: '../../assets/techies/github-logo.svg',
      techname: 'GitHub',
      techurl: 'https://github.com/'
    },
    {
      techlogo: '../../assets/techies/black-logo.png',
      techname: 'SiteGround',
      techurl: 'https://www.siteground.com/'
    },
    {
      techlogo: '../../assets/techies/google-cloud-logo.svg',
      techname: 'Google Cloud Functions',
      techurl: 'https://cloud.google.com/functions/'
    },
    {
      techlogo: '../../assets/techies/firebase-logo.svg',
      techname: 'Firebase',
      techurl: 'https://firebase.google.com/'
    },
    {
      techlogo: '../../assets/techies/sendgrid-logo.svg',
      techname: 'Sendgrid',
      techurl: 'https://sendgrid.com/'
    }
  ];

  constructor(
              private resolver: ComponentFactoryResolver
      ,       private emailservice: EmailService
      ,       private dynamicservice: ProjectsService
      ,       private snackBar: MatSnackBar
      ,       private sanitizer?: DomSanitizer) {
    this.firedemail = false;
    this.projects = ProjectItem[0];
  }

  skype(phone: string) {
    const html = 'skype:' + phone + '?call';
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }

  fireContactEmail(name: string, email: string) {
    this.firedemail = true;
    return this.emailservice.fireContactEmailAsync(name, email, this.snackBar);
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onscroll, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onscroll, true);
  }

  onscroll = ($event: any): void => {
    const scrollablElement = document.getElementById('scrollable');
    const navableElement = document.getElementById('navable');
    if (scrollablElement.scrollTop >= 50) {
      navableElement.classList.remove('navbar-default');
      navableElement.classList.add('navbar-opaque');
    }
    if (scrollablElement.scrollTop < 50) {
      navableElement.classList.remove('navbar-opaque');
      navableElement.classList.add('navbar-default');
    }
  }

  onSwiftTruckSceneBtnClick(scenename: string) {
    this.snackBar.openFromComponent(SwiftTruckSnackbarComponent
        , { duration: 1.5 * 1000
        , verticalPosition: 'top'
        , horizontalPosition: 'center'
    });
    this.entry.clear();
    this.tabs.realignInkBar();
    const element = this.dynamicservice.getDynamicItem(scenename);
    const factory = this.resolver.resolveComponentFactory(element.component);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.name = element.component.name;
  }

  onMatTabChangeEvent($event): void {
    switch ($event.index) {
      case 0:
        this.snackBar.openFromComponent(SwiftTruckSnackbarComponent, {
          duration: 1.5 * 1000,
        });
        break;
      default:
        break;
    }
  }

  onProjectsBtnClick(){
   const element = document.getElementById('main-projects');
   element.scrollIntoView({behavior: 'smooth'});
  }

  onBlogBtnClick(){
   const element = document.getElementById('main-blog');
   element.scrollIntoView({behavior: 'smooth'});
  }

  onContactBtnClick(){
   const element = document.getElementById('main-contact');
   element.scrollIntoView({behavior: 'smooth'});
  }

  onTechnologiesBtnClick(){
   const element = document.getElementById('main-technologies');
   element.scrollIntoView({behavior: 'smooth'});
  }
}

export interface TechieUsed {
  techlogo: string;
  techname: string;
  techurl: string;
}

export interface SwiftTruckScenes {
  scenename: string;
}
