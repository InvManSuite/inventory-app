import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InventoryListComponent } from "./pages/inventory-list/inventory-list.component";

const routes: Routes = [
  { path: "inventory", component: InventoryListComponent },
  { path: "", redirectTo: "/inventory", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
