import {Injectable} from "@angular/core";


@Injectable()
export class BaseUiService {

//fall person image
  public fallBackPerson: string = 'assets/images/profile/blank.png';

//fall back service
  public fallBackImgService: string = 'assets/images/service-fallback.png';

//fall back im
  public fallBackImg: string = 'assets/images/card-fallback.png';

//fall slide im
  public fallSlideImg: string = 'assets/images/slider-fallback.jpg';


}
