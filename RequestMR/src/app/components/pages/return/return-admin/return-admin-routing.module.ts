import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ReturnAdminComponent } from './return-admin.component';
import { ReturnCleaningAdminComponent } from './return-cleaning-admin/return-cleaning-admin.component';
import { DetailCleaningComponent } from './return-cleaning-admin/detail-cleaning/detail-cleaning.component';
import { CompleteCleaningComponent } from './return-cleaning-admin/complete-cleaning/complete-cleaning.component';
import { PaddingCleaningComponent } from './return-cleaning-admin/padding-cleaning/padding-cleaning.component';

import { ReturnCuttingtoolAdminComponent } from './return-cuttingtool-admin/return-cuttingtool-admin.component';
import { DetailCuttingtoolComponent } from './return-cuttingtool-admin/detail-cuttingtool/detail-cuttingtool.component';
import { CompleteCuttingtoolComponent } from './return-cuttingtool-admin/complete-cuttingtool/complete-cuttingtool.component';
import { PaddingCuttingtoolComponent } from './return-cuttingtool-admin/padding-cuttingtool/padding-cuttingtool.component';

import { ReturnGrindingAdminComponent } from './return-grinding-admin/return-grinding-admin.component';
import { DetailGrindingComponent } from './return-grinding-admin/detail-grinding/detail-grinding.component';
import { CompleteGrindingComponent } from './return-grinding-admin/complete-grinding/complete-grinding.component';
import { PaddingGrindingComponent } from './return-grinding-admin/padding-grinding/padding-grinding.component';

import { ReturnOilAdminComponent } from './return-oil-admin/return-oil-admin.component';
import { DetailOilComponent } from './return-oil-admin/detail-oil/detail-oil.component';
import { CompleteOilComponent } from './return-oil-admin/complete-oil/complete-oil.component';
import { PaddingOilComponent } from './return-oil-admin/padding-oil/padding-oil.component';

import { ReturnOtherAdminComponent } from './return-other-admin/return-other-admin.component';
import { DetailOtherComponent } from './return-other-admin/detail-other/detail-other.component';
import { CompleteOtherComponent } from './return-other-admin/complete-other/complete-other.component';
import { PaddingOtherComponent } from './return-other-admin/padding-other/padding-other.component';

import { ReturnSetupAdminComponent } from './return-setup-admin/return-setup-admin.component';
import { DetailSetupComponent } from './return-setup-admin/detail-setup/detail-setup.component';
import { CompleteSetupComponent } from './return-setup-admin/complete-setup/complete-setup.component';
import { PaddingSetupComponent } from './return-setup-admin/padding-setup/padding-setup.component';
const routes: Routes = [
  {
    path: '',
    component: ReturnAdminComponent,
    children: [
      { path: 'return-cleaning-admin',
      component: ReturnCleaningAdminComponent
      },
      { path: 'return-cuttingtool-admin',
      component: ReturnCuttingtoolAdminComponent
      },
      { path: 'return-grinding-admin',
      component: ReturnGrindingAdminComponent
      },
      { path: 'return-oil-admin',
      component: ReturnOilAdminComponent
      },
      { path: 'return-other-admin',
      component: ReturnOtherAdminComponent
      },
      { path:'return-setup-admin',
      component: ReturnSetupAdminComponent
      },
      { path:'detail-cuttingtool',
      component: DetailCuttingtoolComponent
      },
      { path:'complete-cuttingtool',
      component: CompleteCuttingtoolComponent
      },
      { path:'padding-cuttingtool',
      component: PaddingCuttingtoolComponent
      },
      { path:'detail-oil',
      component: DetailOilComponent
      },
      { path:'complete-oil',
      component: CompleteOilComponent
      },
      { path:'padding-oil',
      component: PaddingOilComponent
      },
      { path:'detail-grinding',
      component: DetailGrindingComponent
      },
      { path:'complete-grinding',
      component: CompleteGrindingComponent
      },
      { path:'padding-grinding',
      component: PaddingGrindingComponent
      },
      { path:'detail-cleaning',
      component: DetailCleaningComponent
      },
      { path:'complete-cleaning',
      component: CompleteCleaningComponent
      },
      { path:'padding-cleaning',
      component: PaddingCleaningComponent
      },
      { path:'detail-other',
      component: DetailOtherComponent
      },
      { path:'complete-other',
      component: CompleteOtherComponent
      },
      { path:'padding-other',
      component: PaddingOtherComponent
      },
      { path:'detail-setup',
      component: DetailSetupComponent
      },
      { path:'complete-setup',
      component: CompleteSetupComponent
      },
      { path:'padding-setup',
      component: PaddingSetupComponent
      },
      { path: '', redirectTo: 'cleaning', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReturnAdminRoutingModule { }
