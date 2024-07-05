import { NgModule } from "@angular/core";
import { InvestmentResultsComponent } from "./investment-results.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [InvestmentResultsComponent],
    imports: [BrowserModule,FormsModule],
    exports: [InvestmentResultsComponent]
})
export class InvestmentResultsModule{

}