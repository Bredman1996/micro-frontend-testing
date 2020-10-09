import { Component, Input } from "@angular/core";

@Component({
    templateUrl: './primary-button.component.html',
    styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent{
    @Input()
    public text: string;
}