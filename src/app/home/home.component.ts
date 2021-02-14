import {Component} from '@angular/core';
import {CardData, CardWord} from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public stateCollection: boolean;
  public collection: CardWord[];
  public cards: CardData[] = [
  {
   title: 'Business concepts',
   image: 'analysis.png',
   words: [
   {title: 'analysis', translate: 'аналитика', image: 'analysis.png', state: 'default', },
   {title: 'e-banking', translate: 'электронный банкинг', image: 'banking.png', state: 'default', },
   {title: 'cloud computing', translate: 'облачные вычисления', image: 'cloud-computing.png', state: 'default', },
   {title: 'e-commerce', translate: 'электронная коммерция', image: 'commerce.png', state: 'default', },
   {title: 'corporate', translate: 'корпоративный', image: 'corporate.png', state: 'default', },
   {title: 'creative process', translate: 'творческий процесс', image: 'creative-process.png', state: 'default', },
   {title: 'idea', translate: 'идея', image: 'idea.png', state: 'default', },
   {title: 'leadership', translate: 'лидерство', image: 'leadership.png', state: 'default', },
   {title: 'web development', translate: 'веб-разработка', image: 'web-development.png', state: 'default', },
   ],
   state: 'default',
   isCollection: true,
   id: 0,
   },
   {
   title: 'Education',
   image: 'graduate.svg',
   words: [
   {title: 'diploma', translate: 'диплом', image: 'diploma.svg', state: 'default', },
   {title: 'graduate', translate: 'выпускник', image: 'graduate.svg', state: 'default', },
   {title: 'mentoring', translate: 'наставничество', image: 'mentoring.svg', state: 'default', },
   {title: 'online training', translate: 'онлайн обучение', image: 'online-training.svg', state: 'default', },
   {title: 'studying', translate: 'изучение', image: 'studying.svg', state: 'default', },
   {title: 'time management', translate: 'тайм-менеджмент', image: 'time-management.svg', state: 'default', }
   ],
   state: 'default',
   isCollection: true,
   id: 1,
   },
   {
   title: 'Gadgets',
   image: 'laptop.png',
   words: [
   {title: 'HDD', translate: 'жёсткий диск', image: 'HDD.png', state: 'default', },
   {title: 'headphones', translate: 'наушники', image: 'Headphones.png', state: 'default', },
   {title: 'laptop', translate: 'ноутбук', image: 'laptop.png', state: 'default', },
   {title: 'monitor', translate: 'монитор', image: 'monitor.png', state: 'default', },
   {title: 'processor', translate: 'процессор', image: 'Processor.png', state: 'default', },
   {title: 'watch', translate: 'часы', image: 'Watch.png', state: 'default', }],
   state: 'default',
   isCollection: true,
   id: 2,
   },
   {
   title: 'Remote work',
   image: 'pandemic.png',
   words: [
   {title: 'breakfast', translate: 'завтрак', image: 'breakfast.png', state: 'default', },
   {title: 'conversation', translate: 'переговоры', image: 'conversation.png', state: 'default', },
   {title: 'message', translate: 'сообщение', image: 'message.png', state: 'default', },
   {title: 'pandemic', translate: 'пандемия', image: 'pandemic.png', state: 'default', },
   {title: 'search', translate: 'поиск', image: 'search.png', state: 'default', },
   {title: 'workplace', translate: 'рабочее место', image: 'workplace.png', state: 'default', }],
   state: 'default',
   isCollection: true,
   id: 3,
   },
   {
   title: 'Teamwork',
   image: 'analysis.png',
   words: [
   {title: 'analysis', translate: 'аналитика', image: 'analysis.png', state: 'default', },
   {title: 'announcement', translate: 'объявление', image: 'announcement.png', state: 'default', },
   {title: 'communication', translate: 'общение', image: 'communication.png', state: 'default', },
   {title: 'connection', translate: 'связь', image: 'connection.png', state: 'default', },
   {title: 'presentation', translate: 'презентация', image: 'presentation.png', state: 'default', },
   {title: 'teamwork', translate: 'работа в команде', image: 'teamwork.png', state: 'default', }],
   state: 'default',
   isCollection: true,
   id: 4,
   },
   {
   title: 'Working process',
   image: 'announcement.png',
   words: [
   {title: 'announcement', translate: 'объявление', image: 'announcement.png', state: 'default', },
   {title: 'chat', translate: 'чат', image: 'Chat.png', state: 'default', },
   {title: 'coworking', translate: 'коворкинг', image: 'Coworking.png', state: 'default', },
   {title: 'designer', translate: 'дизайнер', image: 'Designer.png', state: 'default', },
   {title: 'HR manager', translate: 'менеджер по персоналу', image: 'hr.png', state: 'default', },
   {title: 'new app', translate: 'новое приложение', image: 'new-app.png', state: 'default', }],
   state: 'default',
   isCollection: true,
   id: 5,
   },
  ];
  public executeSelectedChange = (event: object) => {
  console.log(event);
  }
  public updateChoice(collection: CardData): void {
  this.collection = collection.words;
    console.log(this.collection)
  this.stateCollection = !(collection.isCollection);
    console.log(this.stateCollection)
  }
}
