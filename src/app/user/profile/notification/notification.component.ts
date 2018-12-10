import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/user.service";

@Component({
    selector:'user-notification',
    template:`
        <div class="container">
            <div class="row text-muted">
                <div class="col-md-12">
                    <div class="jumbotron bg-light">
                        <h3>Notification Setting</h3>
                        <div class="form-group">
                            <input type="checkbox" checked="subscribed" class="mr-2"><label>Get the Notification in your browser and mobile</label>
                            <button (click)="save_data()" class="btn btn-success btn-sm float-right">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})
export class UserNotification{
    getNoti:boolean = false;
    data=JSON.parse(localStorage.getItem('data'));
    subscribed:boolean=this.data.subscribed;
    constructor(private userService:UserService){

    }
    save_data(){
        this.userService.subscribeNotification(this.subscribed).subscribe(data=>{
            console.log(data);
        });
        this.userService.getUserDetails().subscribe(data=>{
            localStorage.setItem('data',JSON.stringify(data));
            this.data=JSON.parse(localStorage.getItem('data'));
            console.log(this.data);
            this.subscribed=this.data.subscribed;
        })
    }
    ngOnInit(){

    }
}