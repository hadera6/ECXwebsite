import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from '../home/home.component';
import { GovernanceComponent} from '../about-us/governance/governance.component';
import { HowEcxWorksComponent} from '../about-us/how-ecx-works/how-ecx-works.component';
import { LawsAndRulesComponent} from '../about-us/laws-and-rules/laws-and-rules.component';
import { MessageFromCeoComponent} from '../about-us/message-from-ceo/message-from-ceo.component';
import { ChickpeasComponent} from '../commodities/chickpeas/chickpeas.component';
import { CoffeeComponent} from '../commodities/coffee/coffee.component';
import { GreenMungBeanComponent} from '../commodities/green-mung-bean/green-mung-bean.component';
import { MaizeComponent} from '../commodities/maize/maize.component';
import { PintoBeanComponent} from '../commodities/pinto-bean/pinto-bean.component';
import { RedKidneyBeanComponent} from '../commodities/red-kidney-bean/red-kidney-bean.component';
import { SesameComponent} from '../commodities/sesame/sesame.component';
import { SoyaBeanComponent} from '../commodities/soya-bean/soya-bean.component';
import { WheatComponent} from '../commodities/wheat/wheat.component';
import { WhitePeaBeanComponent} from '../commodities/white-pea-bean/white-pea-bean.component';
import { WhitePigeonPeaComponent} from '../commodities/white-pigeon-pea/white-pigeon-pea.component';
import { BeingClientComponent} from '../membership/being-a-client/being-a-client.component';
import { CertificationComponent} from '../membership/certification/certification.component';
import { HowTobeMemberComponent} from '../membership/how-tobe-member/how-tobe-member.component';
import { CentralDepositoryComponent} from '../operations/central-depository/central-depository.component';
import { ClearingAndSettlementComponent} from '../operations/clearing-and-settlement/clearing-and-settlement.component';
import { ComplianceComponent} from '../operations/compliance/compliance.component';
import { TradingComponent} from '../operations/trading/trading.component';
import { WarehouseAndQualityComponent} from '../operations/warehouse-and-quality/warehouse-and-quality.component';
import { AnnouncementComponent} from '../news-and-events/announcement/announcement.component';
import { EventsComponent} from '../news-and-events/events/events.component';
import { NewsComponent} from '../news-and-events/news/news.component';
import { NewsletterComponent} from '../news-and-events/newsletter/newsletter.component';
import { PublicationsComponent} from '../resources/publications/publications.component';
import { CareerComponent} from '../career/career.component';
import { MemberComponent} from '../member/member.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'governance', component: GovernanceComponent},
  { path:'how-ecx-works', component: HowEcxWorksComponent},
  { path:'laws-and-rules', component: LawsAndRulesComponent},
  { path:'message-from-ceo', component: MessageFromCeoComponent},
  { path:'chickpeas', component: ChickpeasComponent},
  { path:'coffee', component: CoffeeComponent},
  { path:'green-mung-bean', component: GreenMungBeanComponent},
  { path:'maize', component: MaizeComponent},
  { path:'pinto-bean', component: PintoBeanComponent},
  { path:'red-kidney-bean', component: RedKidneyBeanComponent},
  { path:'sesame', component: SesameComponent},
  { path:'soya-bean', component: SoyaBeanComponent},
  { path:'wheat', component: WheatComponent},
  { path:'white-pea-bean', component: WhitePeaBeanComponent},
  { path:'white-pigeon-pea', component: WhitePigeonPeaComponent},
  { path:'being-a-client', component: BeingClientComponent},
  { path:'certification', component: CertificationComponent},
  { path:'how-tobe-member', component: HowTobeMemberComponent},
  { path:'central-depository', component: CentralDepositoryComponent},
  { path:'clearing-and-settlement', component: ClearingAndSettlementComponent},
  { path:'compliance', component: ComplianceComponent},
  { path:'trading', component: TradingComponent},
  { path:'warehouse-and-quality', component: WarehouseAndQualityComponent},
  { path:'announcement', component: AnnouncementComponent},
  { path:'events', component: EventsComponent},
  { path:'news', component: NewsComponent},
  { path:'newsletter', component: NewsletterComponent},
  { path:'publications', component: PublicationsComponent},
  { path:'career', component: CareerComponent},
  { path:'member', component: MemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }