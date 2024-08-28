import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component"
import { ProductComponent } from "./products/products.component";

@NgModule({
    declarations:[
        AppComponent,
        ProductComponent,
    ],
    imports:[
        AppComponent,
        BrowserModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}
