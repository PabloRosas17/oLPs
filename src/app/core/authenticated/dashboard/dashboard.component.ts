import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    fitemCollection: AngularFirestoreCollection<fstoreitem>;
    fitem: Observable<fstoreitem[]>;
    uploadPercent: Observable<number>;
    downloadURL: Observable<string>;

    constructor(private firestore: AngularFirestore
        ,       private firestorage: AngularFireStorage) {
        this.fitemCollection = firestore.collection<fstoreitem>('olps-data');
        this.fitem = this.fitemCollection.valueChanges();
    }
    /* add item to the fire store */
    addStoreItem(form_name: string, form_path: string) {
        const form_id = this.firestore.createId();
        const form_item: fstoreitem = { form_name, form_path };
        this.fitemCollection.doc(form_id).set(form_item);
    }
    /* add item to the fire storeage */
    addStorageItem(event: any) {
        const efile = event.target.files[0];
        const ename = 'olps-data/' + event.target.files[0].name;
        const task = this.firestorage.upload(ename, efile);

        /* notifier when the download URL is available then place fire store ptr */
        const fileRef = this.firestorage.ref(ename);
        task.snapshotChanges().pipe(
            finalize(() => {
                this.downloadURL = fileRef.getDownloadURL(),
                this.downloadURL.subscribe(url => {
                    this.addStoreItem(efile.name, url);
                });
            })
        ).subscribe();

        this.uploadPercent = task.percentageChanges();
    }

    ngOnInit() { }
}

export interface fstoreitem{
    form_name: string;
    form_path: string;
}
