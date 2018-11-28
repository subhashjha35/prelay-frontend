import { Component, OnInit } from "@angular/core";

@Component({
    selector:'user-notification',
    template:`
        <div class="container">
            <div class="row text-muted">
                <div class="col-md-12">
                    <form class="jumbotron bg-light">
                        <h3>Notification Setting</h3>
                        <div class="form-group">
                            <input type="checkbox" class="mr-2"><label>Get the Notification in your browser and mobile</label>
                            <button class="btn btn-success btn-sm float-right">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>`
})
export class UserNotification{

    constructor(){

    }
    ngOnInit(){

    }
}