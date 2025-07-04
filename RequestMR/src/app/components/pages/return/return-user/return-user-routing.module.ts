import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReturnUserComponent } from './return-user.component';

import { ReturnCleaningUserComponent } from './return-cleaning-user/return-cleaning-user.component';
import { ListReturnCleaningComponent } from './list-return-cleaning/list-return-cleaning.component';
import { DetailReturnCleaningComponent } from './detail-return-cleaning/detail-return-cleaning.component';

import { ReturnCuttingtoolUserComponent } from './return-cuttingtool-user/return-cuttingtool-user.component';
import { ListReturnCuttingtoolComponent } from './list-return-cuttingtool/list-return-cuttingtool.component';
import { DetailReturnCuttingtoolComponent } from './detail-return-cuttingtool/detail-return-cuttingtool.component';

import { ReturnGrindingUserComponent } from './return-grinding-user/return-grinding-user.component';
import { ListReturnGrindingComponent } from './list-return-grinding/list-return-grinding.component';
import { DetailReturnGrindingComponent } from './detail-return-grinding/detail-return-grinding.component';

import { ReturnOilUserComponent } from './return-oil-user/return-oil-user.component';
import { ListReturnOilComponent } from './list-return-oil/list-return-oil.component';
import { DetailReturnOilComponent } from './detail-return-oil/detail-return-oil.component';

import { ReturnOtherUserComponent } from './return-other-user/return-other-user.component';
import { ListReturnOtherComponent } from './list-return-other/list-return-other.component';
import { DetailReturnOtherComponent } from './detail-return-other/detail-return-other.component';

import { ReturnSetupUserComponent } from './return-setup-user/return-setup-user.component';
import { ListReturnSetupComponent } from './list-return-setup/list-return-setup.component';
import { DetailReturnSetupComponent } from './detail-return-setup/detail-return-setup.component';

const routes: Routes = [
  {
    path: '',
    component: ReturnUserComponent,
    children: [
      { path: 'return-cleaning-user',
      component: ReturnCleaningUserComponent
      },
      { path:'list-return-cleaning',
      component: ListReturnCleaningComponent
      },
      { path:'detail-return-cleaning',
      component: DetailReturnCleaningComponent
      },

      { path: 'return-cuttingtool-user',
      component: ReturnCuttingtoolUserComponent
      },
      { path:'list-return-cuttingtool',
      component: ListReturnCuttingtoolComponent
      },
      { path:'detail-return-cuttingtool',
      component: DetailReturnCuttingtoolComponent
      },

      { path: 'return-grinding-user',
      component: ReturnGrindingUserComponent
      },
      { path:'list-return-grinding',
      component: ListReturnGrindingComponent
      },
      { path:'detail-return-grinding',
      component: DetailReturnGrindingComponent
      },

      { path: 'return-oil-user',
      component: ReturnOilUserComponent
      },
      { path:'list-return-oil',
      component: ListReturnOilComponent
      },
      { path:'detail-return-oil',
      component: DetailReturnOilComponent
      },

      { path: 'return-other-user',
      component: ReturnOtherUserComponent
      },
      { path:'list-return-other',
      component: ListReturnOtherComponent
      },
      { path:'detail-return-other',
      component: DetailReturnOtherComponent
      },

      { path:'return-setup-user',
      component: ReturnSetupUserComponent
      },
      { path:'list-return-setup',
      component: ListReturnSetupComponent
      },
      { path:'detail-return-setup',
      component: DetailReturnSetupComponent
      },

      { path: '', redirectTo: 'cleaning', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnUserRoutingModule { }
