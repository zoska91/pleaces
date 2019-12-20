import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { NotesComponent } from "./pages/notes/notes.component";
import { PlansComponent } from "./pages/plans/plans.component";
import { HistoryComponent } from "./pages/history/history.component";
import { RoadsComponent } from "./pages/roads/roads.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "notes", component: NotesComponent },
  { path: "plans", component: PlansComponent },
  { path: "history", component: HistoryComponent },
  { path: "roads", component: RoadsComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
