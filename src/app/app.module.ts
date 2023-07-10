import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrickerComponent} from '../components/tricker/tricker.component';
import { HeaderComponent} from '../components/shared/header/header.component';
import { IntroComponent} from '../components/home/intro/intro.component';
import { FooterComponent} from '../components/shared/footer/footer.component';
import { HomeComponent} from '../components/home/home.component';
import { GovernanceComponent} from '../components/about-us/governance/governance.component';
import { HowEcxWorksComponent} from '../components/about-us/how-ecx-works/how-ecx-works.component';
import { LawsAndRulesComponent} from '../components/about-us/laws-and-rules/laws-and-rules.component';
import { MessageFromCeoComponent} from '../components/about-us/message-from-ceo/message-from-ceo.component';
import { ChickpeasComponent} from '../components/commodities/chickpeas/chickpeas.component';
import { CoffeeComponent} from '../components/commodities/coffee/coffee.component';
import { GreenMungBeanComponent} from '../components/commodities/green-mung-bean/green-mung-bean.component';
import { MaizeComponent} from '../components/commodities/maize/maize.component';
import { PintoBeanComponent} from '../components/commodities/pinto-bean/pinto-bean.component';
import { RedKidneyBeanComponent} from '../components/commodities/red-kidney-bean/red-kidney-bean.component';
import { SesameComponent} from '../components/commodities/sesame/sesame.component';
import { SoyaBeanComponent} from '../components/commodities/soya-bean/soya-bean.component';
import { WheatComponent} from '../components/commodities/wheat/wheat.component';
import { WhitePeaBeanComponent} from '../components/commodities/white-pea-bean/white-pea-bean.component';
import { WhitePigeonPeaComponent} from '../components/commodities/white-pigeon-pea/white-pigeon-pea.component';
import { BeingClientComponent} from '../components/membership/being-a-client/being-a-client.component';
import { CertificationComponent} from '../components/membership/certification/certification.component';
import { HowTobeMemberComponent} from '../components/membership/how-tobe-member/how-tobe-member.component';
import { CentralDepositoryComponent} from '../components/operations/central-depository/central-depository.component';
import { ClearingAndSettlementComponent} from '../components/operations/clearing-and-settlement/clearing-and-settlement.component';
import { ComplianceComponent} from '../components/operations/compliance/compliance.component';
import { TradingComponent} from '../components/operations/trading/trading.component';
import { WarehouseAndQualityComponent} from '../components/operations/warehouse-and-quality/warehouse-and-quality.component';
import { AnnouncementComponent} from '../components/news-and-events/announcement/announcement.component';
import { EventsComponent} from '../components/news-and-events/events/events.component';
import { NewsComponent} from '../components/news-and-events/news/news.component';
import { NewsletterComponent} from '../components/news-and-events/newsletter/newsletter.component';
import { PublicationsComponent} from '../components/resources/publications/publications.component';
import { CareerComponent} from '../components/career/career.component';
import { MemberComponent} from '../components/member/member.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    TrickerComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    HomeComponent,
    ChickpeasComponent,
    CoffeeComponent,
    GreenMungBeanComponent,
    MaizeComponent,
    PintoBeanComponent,
    RedKidneyBeanComponent,
    SesameComponent,
    SoyaBeanComponent,
    WheatComponent,
    WhitePeaBeanComponent,
    WhitePigeonPeaComponent,
    GovernanceComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
