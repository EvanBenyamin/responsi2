import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'mahasiswa',
    loadChildren: () => import('./mahasiswa/mahasiswa.module').then(m => m.MahasiswaPageModule),
    canLoad: [AutoLoginGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: 'mahasiswa',
    loadChildren: () => import('./mahasiswa/mahasiswa.module').then(m => m.MahasiswaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'mahasiswa-edit/:nim',
    loadChildren: () => import('./mahasiswa-edit/mahasiswa-edit.module').then(m => m.MahasiswaEditPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'mahasiswa-tambah',
    loadChildren: () => import('./mahasiswa-tambah/mahasiswa-tambah.module').then(m => m.MahasiswaTambahPageModule),
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }