import { Injectable } from '@angular/core';

export interface stationType{
  id: string; 
  is_domestic: boolean; 
  latitude: number;
  legacy_id: number; 
  longitude: number; 
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor() { };
    getList(){
      return this.showList;
    }
    showList:stationType[]=[
      {
        "id": "005512328", 
        "is_domestic": true, 
        "latitude": 47.4553099845687, 
        "legacy_id": 5, 
        "longitude": 20.5531242155933, 
        "name": "Ab\u00e1dszal\u00f3k"
      }, 
      {
        "id": "005507229", 
        "is_domestic": true, 
        "latitude": 46.152809436255, 
        "legacy_id": 6, 
        "longitude": 18.0754236212985, 
        "name": "Abaliget"
      }, 
      {
        "id": "005504135", 
        "is_domestic": true, 
        "latitude": 47.0238354573265, 
        "legacy_id": 7, 
        "longitude": 18.5423046678278, 
        "name": "Aba-S\u00e1rkereszt\u00far"
      }, 
      {
        "id": "005513326", 
        "is_domestic": true, 
        "latitude": 48.3088283850299, 
        "legacy_id": 8, 
        "longitude": 21.1981489008495, 
        "name": "Aba\u00fajk\u00e9r"
      }, 
      {
        "id": "005513300", 
        "is_domestic": true, 
        "latitude": 48.2864261961239, 
        "legacy_id": 9, 
        "longitude": 21.181245291225, 
        "name": "Aba\u00fajsz\u00e1nt\u00f3"
      }, 
      {
        "id": "005513318", 
        "is_domestic": true, 
        "latitude": 48.2687234135462, 
        "legacy_id": 10, 
        "longitude": 21.1795918948942, 
        "name": "Aba\u00fajsz\u00e1nt\u00f3i f\u00fcrd\u0151"
      }, 
      {
        "id": "005501305", 
        "is_domestic": true, 
        "latitude": 47.6907486905979, 
        "legacy_id": 11, 
        "longitude": 17.5409082703735, 
        "name": "Abda"
      }, 
      {
        "id": "005513730", 
        "is_domestic": true, 
        "latitude": 47.1732106717516, 
        "legacy_id": 13, 
        "longitude": 20.0159365068214, 
        "name": "Abony"
      }, 
      {
        "id": "005542317", 
        "is_domestic": true, 
        "latitude": 47.2061034040506, 
        "legacy_id": 14, 
        "longitude": 20.1255259022915, 
        "name": "Abonyi \u00fat"
      }, 
      {
        "id": "005504523", 
        "is_domestic": true, 
        "latitude": 46.8149404753789, 
        "legacy_id": 15, 
        "longitude": 17.5721755326157, 
        "name": "\u00c1brah\u00e1mhegy"
      }, 
      {
        "id": "005501230", 
        "is_domestic": true, 
        "latitude": 47.7167466586844, 
        "legacy_id": 23, 
        "longitude": 18.004688892271, 
        "name": "\u00c1cs"
      }, 
      {
        "id": "004305249", 
        "is_domestic": true, 
        "latitude": 47.3084059938557, 
        "legacy_id": 24, 
        "longitude": 16.734719739479, 
        "name": "Acs\u00e1d"
      }, 
      {
        "id": "005510884", 
        "is_domestic": true, 
        "latitude": 47.8010271495146, 
        "legacy_id": 25, 
        "longitude": 19.3859179571118, 
        "name": "Acsa-Erd\u0151k\u00fcrt"
      }, 
      {
        "id": "005511247", 
        "is_domestic": true, 
        "latitude": 47.6964559578757, 
        "legacy_id": 26, 
        "longitude": 19.9752513374526, 
        "name": "Ad\u00e1cs"
      }, 
      {
        "id": "005508383", 
        "is_domestic": true, 
        "latitude": 46.8541320906221, 
        "legacy_id": 27, 
        "longitude": 18.1415119757196, 
        "name": "\u00c1d\u00e1nd"
      }, 
      {
        "id": "005506452", 
        "is_domestic": true, 
        "latitude": 47.1062283435955, 
        "legacy_id": 31, 
        "longitude": 18.847983658786, 
        "name": "Adony"
      }, 
      {
        "id": "005503244", 
        "is_domestic": true, 
        "latitude": 47.1976224444944, 
        "legacy_id": 35, 
        "longitude": 18.6047767945955, 
        "name": "Ag\u00e1rd"
      }, 
      {
        "id": "005332182", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 38, 
        "longitude": null, 
        "name": "Aghires"
      }, 
      {
        "id": "005514100", 
        "is_domestic": true, 
        "latitude": 48.1865117121535, 
        "legacy_id": 54, 
        "longitude": 22.0488903387837, 
        "name": "Ajak"
      }, 
      {
        "id": "005503996", 
        "is_domestic": true, 
        "latitude": 47.1058064937751, 
        "legacy_id": 56, 
        "longitude": 17.5727151925969, 
        "name": "Ajka"
      }, 
      {
        "id": "005504010", 
        "is_domestic": true, 
        "latitude": 47.096782565733, 
        "legacy_id": 57, 
        "longitude": 17.5553799031127, 
        "name": "Ajka-Gy\u00e1rtelep"
      }, 
      {
        "id": "005504465_0", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 58, 
        "longitude": null, 
        "name": "Akali (Balatonakali-D\u00f6rgicse)"
      }, 
      {
        "id": "005504325_1", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 59, 
        "longitude": null, 
        "name": "Akarattya (Balatonakarattya)"
      }, 
      {
        "id": "005510520", 
        "is_domestic": true, 
        "latitude": 47.6018554608298, 
        "legacy_id": 60, 
        "longitude": 19.1539558803756, 
        "name": "Alagimajor"
      }, 
      {
        "id": "005506635", 
        "is_domestic": true, 
        "latitude": 46.8319094594005, 
        "legacy_id": 61, 
        "longitude": 18.6572150902238, 
        "name": "Alap"
      }, 
      {
        "id": "005323038", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 62, 
        "longitude": null, 
        "name": "Alba Iulia"
      }, 
      {
        "id": "005503111", 
        "is_domestic": true, 
        "latitude": 47.4411222408417, 
        "legacy_id": 64, 
        "longitude": 19.0337404475939, 
        "name": "Albertfalva"
      }, 
      {
        "id": "005513698", 
        "is_domestic": true, 
        "latitude": 47.2404689051997, 
        "legacy_id": 65, 
        "longitude": 19.6065236452712, 
        "name": "Albertirsa"
      }, 
      {
        "id": "005332508", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 72, 
        "longitude": null, 
        "name": "Alesd"
      }, 
      {
        "id": "005518549", 
        "is_domestic": true, 
        "latitude": 46.3356460531545, 
        "legacy_id": 78, 
        "longitude": 20.1960381275901, 
        "name": "Algy\u0151"
      }, 
      {
        "id": "005503319_2", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 79, 
        "longitude": null, 
        "name": "Aliga (Balatonaliga)"
      }, 
      {
        "id": "005540584_3", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7904, 
        "longitude": null, 
        "name": "\u00c1llami telepek (G\u00f6d\u00f6ll\u0151-\u00c1llami telepek)"
      }, 
      {
        "id": "005504366_4", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 86, 
        "longitude": null, 
        "name": "Alm\u00e1di (Balatonalm\u00e1di)"
      }, 
      {
        "id": "005546060", 
        "is_domestic": true, 
        "latitude": 47.9561261488095, 
        "legacy_id": 88, 
        "longitude": 20.3569277352532, 
        "name": "Alm\u00e1r"
      }, 
      {
        "id": "005516659", 
        "is_domestic": true, 
        "latitude": 46.1162879136553, 
        "legacy_id": 89, 
        "longitude": 19.3288047652071, 
        "name": "Alm\u00e1s"
      }, 
      {
        "id": "005501172", 
        "is_domestic": true, 
        "latitude": 47.7254710796398, 
        "legacy_id": 90, 
        "longitude": 18.2617534738487, 
        "name": "Alm\u00e1sf\u00fczit\u0151"
      }, 
      {
        "id": "005501180", 
        "is_domestic": true, 
        "latitude": 47.7312465114375, 
        "legacy_id": 91, 
        "longitude": 18.2179911232616, 
        "name": "Alm\u00e1sf\u00fczit\u0151 fels\u0151"
      }, 
      {
        "id": "005503517", 
        "is_domestic": true, 
        "latitude": 46.7242857002854, 
        "legacy_id": 94, 
        "longitude": 17.5163976006657, 
        "name": "Als\u00f3b\u00e9latelep"
      }, 
      {
        "id": "005512898", 
        "is_domestic": true, 
        "latitude": 48.2128441693924, 
        "legacy_id": 95, 
        "longitude": 20.7922302959501, 
        "name": "Als\u00f3boldva"
      }, 
      {
        "id": "005501123", 
        "is_domestic": true, 
        "latitude": 47.5632443579627, 
        "legacy_id": 96, 
        "longitude": 18.4245875672128, 
        "name": "Als\u00f3galla"
      }, 
      {
        "id": "005510405", 
        "is_domestic": true, 
        "latitude": 47.6781832453443, 
        "legacy_id": 97, 
        "longitude": 19.1347442309472, 
        "name": "Als\u00f3g\u00f6d"
      }, 
      {
        "id": "005504754", 
        "is_domestic": true, 
        "latitude": 46.7658565125565, 
        "legacy_id": 98, 
        "longitude": 17.2765474145529, 
        "name": "Als\u00f3gyenes"
      }, 
      {
        "id": "005544677", 
        "is_domestic": true, 
        "latitude": 46.9615955951897, 
        "legacy_id": 100, 
        "longitude": 19.5790544564703, 
        "name": "Als\u00f3m\u00e9ntelek"
      }, 
      {
        "id": "005507021_5", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 102, 
        "longitude": null, 
        "name": "Als\u00f3mocsol\u00e1d (M\u00e1gocs-Als\u00f3mocsol\u00e1d)"
      }, 
      {
        "id": "005505389", 
        "is_domestic": true, 
        "latitude": 46.853913433396, 
        "legacy_id": 103, 
        "longitude": 16.9366355027136, 
        "name": "Als\u00f3nemesap\u00e1ti"
      }, 
      {
        "id": "005544370", 
        "is_domestic": true, 
        "latitude": 46.1993879278058, 
        "legacy_id": 104, 
        "longitude": 18.7384324172797, 
        "name": "Als\u00f3ny\u00e9k"
      }, 
      {
        "id": "005504382", 
        "is_domestic": true, 
        "latitude": 46.9852174566052, 
        "legacy_id": 105, 
        "longitude": 17.9745735680715, 
        "name": "Als\u00f3\u00f6rs"
      }, 
      {
        "id": "004302311", 
        "is_domestic": true, 
        "latitude": 46.964105, 
        "legacy_id": 106, 
        "longitude": 16.37791, 
        "name": "Als\u00f3r\u00f6n\u00f6k"
      }, 
      {
        "id": "004302485_6", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 107, 
        "longitude": null, 
        "name": "Als\u00f3szeleste (\u00d6lb\u0151-Als\u00f3szeleste)"
      }, 
      {
        "id": "005517244", 
        "is_domestic": true, 
        "latitude": 46.8984773031108, 
        "legacy_id": 109, 
        "longitude": 19.7799868400935, 
        "name": "Als\u00f3\u00farr\u00e9t"
      }, 
      {
        "id": "005540816_7", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 110, 
        "longitude": null, 
        "name": "Als\u00f3v\u00e1ros (V\u00e1c-Als\u00f3v\u00e1ros)"
      }, 
      {
        "id": "005321028_8", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 119, 
        "longitude": null, 
        "name": "Alvinc (Vintu De Jos)"
      }, 
      {
        "id": "005544354", 
        "is_domestic": true, 
        "latitude": 46.3530006680412, 
        "legacy_id": 122, 
        "longitude": 20.7405873943738, 
        "name": "Ambr\u00f3zfalva"
      }, 
      {
        "id": "005508300", 
        "is_domestic": true, 
        "latitude": 46.6472907158442, 
        "legacy_id": 129, 
        "longitude": 17.8922770698367, 
        "name": "Andocs"
      }, 
      {
        "id": "005512393", 
        "is_domestic": true, 
        "latitude": 47.8522926207243, 
        "legacy_id": 131, 
        "longitude": 20.402322251352, 
        "name": "Andornakt\u00e1lya"
      }, 
      {
        "id": "005505108", 
        "is_domestic": true, 
        "latitude": 46.8629324986001, 
        "legacy_id": 133, 
        "longitude": 16.7792963439987, 
        "name": "Andr\u00e1shida"
      }, 
      {
        "id": "005510124", 
        "is_domestic": true, 
        "latitude": 47.5496856093726, 
        "legacy_id": 6726, 
        "longitude": 19.0897229494241, 
        "name": "Angyalf\u00f6ld"
      }, 
      {
        "id": "005341846", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 153, 
        "longitude": null, 
        "name": "Apa"
      }, 
      {
        "id": "005513938", 
        "is_domestic": true, 
        "latitude": 47.584048369599, 
        "legacy_id": 154, 
        "longitude": 21.6556064076663, 
        "name": "Apafa"
      }, 
      {
        "id": "005515669", 
        "is_domestic": true, 
        "latitude": 47.953878529128, 
        "legacy_id": 155, 
        "longitude": 21.9390347597065, 
        "name": "Apagy"
      }, 
      {
        "id": "005516196_9", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 158, 
        "longitude": null, 
        "name": "Apaj (D\u00f6ms\u00f6d)"
      }, 
      {
        "id": "005519117", 
        "is_domestic": true, 
        "latitude": 46.1751299165495, 
        "legacy_id": 160, 
        "longitude": 20.580360666692, 
        "name": "Ap\u00e1tfalva"
      }, 
      {
        "id": "005511767", 
        "is_domestic": true, 
        "latitude": 47.7912582952425, 
        "legacy_id": 161, 
        "longitude": 19.6683506175344, 
        "name": "Apc-Zagyvasz\u00e1nt\u00f3"
      }, 
      {
        "id": "005540253", 
        "is_domestic": true, 
        "latitude": 47.5659665919677, 
        "legacy_id": 6663, 
        "longitude": 19.0498815652649, 
        "name": "Aquincum"
      }, 
      {
        "id": "005504408_10", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 166, 
        "longitude": null, 
        "name": "Ar\u00e1cs (Balatonar\u00e1cs)"
      }, 
      {
        "id": "005321834", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 167, 
        "longitude": null, 
        "name": "Arad"
      }, 
      {
        "id": "005515362", 
        "is_domestic": true, 
        "latitude": 47.6628107468851, 
        "legacy_id": 169, 
        "longitude": 21.8426261766562, 
        "name": "Aradv\u00e1nypuszta"
      }, 
      {
        "id": "005515891", 
        "is_domestic": true, 
        "latitude": 48.2114909671371, 
        "legacy_id": 170, 
        "longitude": 22.2535488131395, 
        "name": "Aranyosap\u00e1ti"
      }, 
      {
        "id": "005331827_11", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 171, 
        "longitude": null, 
        "name": "Aranyosgy\u00e9res (Campia Turzii)"
      }, 
      {
        "id": "005341860_12", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 172, 
        "longitude": null, 
        "name": "Aranyosmeggyes (Mediesu Aurit)"
      }, 
      {
        "id": "005501408", 
        "is_domestic": true, 
        "latitude": 47.5735000222898, 
        "legacy_id": 7345, 
        "longitude": 19.0182025676238, 
        "name": "Aranyv\u00f6lgy"
      }, 
      {
        "id": "005544743", 
        "is_domestic": true, 
        "latitude": 46.8663968544844, 
        "legacy_id": 186, 
        "longitude": 19.9892915238315, 
        "name": "\u00c1rp\u00e1dsz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005513151", 
        "is_domestic": true, 
        "latitude": 48.2201957186359, 
        "legacy_id": 199, 
        "longitude": 20.9616826933273, 
        "name": "Aszal\u00f3"
      }, 
      {
        "id": "005511163", 
        "is_domestic": true, 
        "latitude": 47.6479065882178, 
        "legacy_id": 200, 
        "longitude": 19.4924707509794, 
        "name": "Asz\u00f3d"
      }, 
      {
        "id": "005504424", 
        "is_domestic": true, 
        "latitude": 46.925517524345, 
        "legacy_id": 201, 
        "longitude": 17.8326298813048, 
        "name": "Asz\u00f3f\u0151"
      }, 
      {
        "id": "005507419", 
        "is_domestic": true, 
        "latitude": 45.9357874036648, 
        "legacy_id": 202, 
        "longitude": 18.3072073899147, 
        "name": "\u00c1ta"
      }, 
      {
        "id": "005540857_13", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 206, 
        "longitude": null, 
        "name": "\u00c1tkel\u00e9s (D\u00f6m\u00f6si \u00e1tkel\u00e9s)"
      }, 
      {
        "id": "005506213", 
        "is_domestic": true, 
        "latitude": 46.3686544785504, 
        "legacy_id": 208, 
        "longitude": 18.0674862273147, 
        "name": "Attala"
      }, 
      {
        "id": "008002140", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 214, 
        "longitude": null, 
        "name": "Augsburg Hbf"
      }, 
      {
        "id": "005505637", 
        "is_domestic": true, 
        "latitude": 46.0284263149505, 
        "legacy_id": 233, 
        "longitude": 17.3423695929518, 
        "name": "Bab\u00f3csa"
      }, 
      {
        "id": "005503798_14", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 234, 
        "longitude": null, 
        "name": "B\u00e1bolna (Nagyigm\u00e1nd-B\u00e1bolna)"
      }, 
      {
        "id": "005508359", 
        "is_domestic": true, 
        "latitude": 46.7461655569037, 
        "legacy_id": 235, 
        "longitude": 18.1098558752979, 
        "name": "B\u00e1bonymegyer"
      }, 
      {
        "id": "007223404", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 241, 
        "longitude": null, 
        "name": "Backa Topola"
      }, 
      {
        "id": "005516642", 
        "is_domestic": true, 
        "latitude": 46.1178343803841, 
        "legacy_id": 245, 
        "longitude": 19.3469258620944, 
        "name": "B\u00e1csalm\u00e1s"
      }, 
      {
        "id": "005516675", 
        "is_domestic": true, 
        "latitude": 46.1157016703161, 
        "legacy_id": 246, 
        "longitude": 19.159773131093, 
        "name": "B\u00e1csbokod-B\u00e1csbors\u00f3d"
      }, 
      {
        "id": "005516675_15", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 247, 
        "longitude": null, 
        "name": "B\u00e1csbors\u00f3d (B\u00e1csbokod-B\u00e1csbors\u00f3d)"
      }, 
      {
        "id": "008133020", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 267, 
        "longitude": null, 
        "name": "Bad Neusiedl Am See "
      }, 
      {
        "id": "008006006", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 277, 
        "longitude": null, 
        "name": "Bad Schandau"
      }, 
      {
        "id": "005504556", 
        "is_domestic": true, 
        "latitude": 46.7884201071854, 
        "legacy_id": 286, 
        "longitude": 17.5063637504202, 
        "name": "Badacsony"
      }, 
      {
        "id": "005504564", 
        "is_domestic": true, 
        "latitude": 46.790671033091, 
        "legacy_id": 287, 
        "longitude": 17.4741118848143, 
        "name": "Badacsonyl\u00e1bdihegy"
      }, 
      {
        "id": "005504531", 
        "is_domestic": true, 
        "latitude": 46.8064430475963, 
        "legacy_id": 288, 
        "longitude": 17.5299814841203, 
        "name": "Badacsony\u00f6rs"
      }, 
      {
        "id": "005504549", 
        "is_domestic": true, 
        "latitude": 46.8045950441853, 
        "legacy_id": 289, 
        "longitude": 17.5180955159057, 
        "name": "Badacsonytomaj"
      }, 
      {
        "id": "005504572", 
        "is_domestic": true, 
        "latitude": 46.8098669363305, 
        "legacy_id": 290, 
        "longitude": 17.4692461941763, 
        "name": "Badacsonyt\u00f6rdemic-Szigliget"
      }, 
      {
        "id": "005511155", 
        "is_domestic": true, 
        "latitude": 47.6410055581286, 
        "legacy_id": 295, 
        "longitude": 19.4716586790959, 
        "name": "Bag"
      }, 
      {
        "id": "005518085", 
        "is_domestic": true, 
        "latitude": 47.0601624298036, 
        "legacy_id": 296, 
        "longitude": 20.3156969998324, 
        "name": "Bagimajor"
      }, 
      {
        "id": "005505116", 
        "is_domestic": true, 
        "latitude": 46.8749456171493, 
        "legacy_id": 297, 
        "longitude": 16.7460113357875, 
        "name": "Bagod"
      }, 
      {
        "id": "005341638", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 300, 
        "longitude": null, 
        "name": "Baia Mare"
      }, 
      {
        "id": "005311308", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6740, 
        "longitude": null, 
        "name": "B\u0103ile Herculane"
      }, 
      {
        "id": "005340256", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6802, 
        "longitude": null, 
        "name": "B\u0103ile Tu\u015fnad"
      }, 
      {
        "id": "005516709", 
        "is_domestic": true, 
        "latitude": 46.1865982556542, 
        "legacy_id": 308, 
        "longitude": 18.9576009398678, 
        "name": "Baja"
      }, 
      {
        "id": "005507161", 
        "is_domestic": true, 
        "latitude": 46.1931463270009, 
        "legacy_id": 309, 
        "longitude": 18.9211648198225, 
        "name": "Baja-Dunaf\u00fcrd\u0151"
      }, 
      {
        "id": "005505082", 
        "is_domestic": true, 
        "latitude": 46.8180563531455, 
        "legacy_id": 310, 
        "longitude": 16.3580552250713, 
        "name": "Baj\u00e1nsenye"
      }, 
      {
        "id": "005504937", 
        "is_domestic": true, 
        "latitude": 46.7320060677493, 
        "legacy_id": 312, 
        "longitude": 16.8488783797938, 
        "name": "Bak"
      }, 
      {
        "id": "005504465_16", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6680, 
        "longitude": null, 
        "name": "B.akali (Balatonakali-D\u00f6rgicse)"
      }, 
      {
        "id": "005504325_17", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6685, 
        "longitude": null, 
        "name": "B.akarattya (Balatonakarattya)"
      }, 
      {
        "id": "005545716", 
        "is_domestic": true, 
        "latitude": 47.4160267972336, 
        "legacy_id": 314, 
        "longitude": 17.8116884679568, 
        "name": "Bakonygyir\u00f3t"
      }, 
      {
        "id": "005503756", 
        "is_domestic": true, 
        "latitude": 47.4438978524944, 
        "legacy_id": 315, 
        "longitude": 18.1034435572176, 
        "name": "Bakonys\u00e1rk\u00e1ny"
      }, 
      {
        "id": "005502972", 
        "is_domestic": true, 
        "latitude": 47.3960002335981, 
        "legacy_id": 316, 
        "longitude": 17.8175325279802, 
        "name": "Bakonyszentl\u00e1szl\u00f3"
      }, 
      {
        "id": "005515701", 
        "is_domestic": true, 
        "latitude": 47.9884566138614, 
        "legacy_id": 317, 
        "longitude": 22.082640647877, 
        "name": "Baktal\u00f3r\u00e1nth\u00e1za"
      }, 
      {
        "id": "005545922", 
        "is_domestic": true, 
        "latitude": 46.6907819267761, 
        "legacy_id": 318, 
        "longitude": 16.8244795355183, 
        "name": "Bakt\u00fctt\u00f6s"
      }, 
      {
        "id": "005510967", 
        "is_domestic": true, 
        "latitude": 48.0714172569973, 
        "legacy_id": 320, 
        "longitude": 19.2937078561101, 
        "name": "Balassagyarmat"
      }, 
      {
        "id": "005517178", 
        "is_domestic": true, 
        "latitude": 46.4135321847188, 
        "legacy_id": 321, 
        "longitude": 20.0015257249272, 
        "name": "Bal\u00e1stya"
      }, 
      {
        "id": "005504465", 
        "is_domestic": true, 
        "latitude": 46.8798411715374, 
        "legacy_id": 322, 
        "longitude": 17.747843081434, 
        "name": "Balatonakali-D\u00f6rgicse"
      }, 
      {
        "id": "005504325", 
        "is_domestic": true, 
        "latitude": 47.0173854090932, 
        "legacy_id": 323, 
        "longitude": 18.1677626912872, 
        "name": "Balatonakarattya"
      }, 
      {
        "id": "005503319", 
        "is_domestic": true, 
        "latitude": 46.9842720778511, 
        "legacy_id": 324, 
        "longitude": 18.1709870643641, 
        "name": "Balatonaliga"
      }, 
      {
        "id": "005504366", 
        "is_domestic": true, 
        "latitude": 47.0283947459369, 
        "legacy_id": 325, 
        "longitude": 18.0147352924566, 
        "name": "Balatonalm\u00e1di"
      }, 
      {
        "id": "005504408", 
        "is_domestic": true, 
        "latitude": 46.9625541587481, 
        "legacy_id": 326, 
        "longitude": 17.8973615279917, 
        "name": "Balatonar\u00e1cs"
      }, 
      {
        "id": "005503558", 
        "is_domestic": true, 
        "latitude": 46.713812260086, 
        "legacy_id": 327, 
        "longitude": 17.3169045178208, 
        "name": "Balatonber\u00e9ny"
      }, 
      {
        "id": "005503475", 
        "is_domestic": true, 
        "latitude": 46.7759022947657, 
        "legacy_id": 328, 
        "longitude": 17.6469624148716, 
        "name": "Balatonbogl\u00e1r"
      }, 
      {
        "id": "005504804", 
        "is_domestic": true, 
        "latitude": 46.802661092803, 
        "legacy_id": 329, 
        "longitude": 17.3849226990925, 
        "name": "Balatonederics"
      }, 
      {
        "id": "005503525", 
        "is_domestic": true, 
        "latitude": 46.7137186484454, 
        "legacy_id": 330, 
        "longitude": 17.4832300655658, 
        "name": "Balatonfenyves"
      }, 
      {
        "id": "005503483", 
        "is_domestic": true, 
        "latitude": 46.7082720820666, 
        "legacy_id": 331, 
        "longitude": 17.453917651224, 
        "name": "Balatonfenyves als\u00f3"
      }, 
      {
        "id": "005549452", 
        "is_domestic": true, 
        "latitude": 46.7124176999601, 
        "legacy_id": 332, 
        "longitude": 17.4790174638129, 
        "name": "Balatonfenyves GV"
      }, 
      {
        "id": "005547308", 
        "is_domestic": true, 
        "latitude": 47.0310877098314, 
        "legacy_id": 333, 
        "longitude": 18.2142593578276, 
        "name": "Balatonf\u0151kaj\u00e1r fels\u0151"
      }, 
      {
        "id": "005503418", 
        "is_domestic": true, 
        "latitude": 46.8531913734159, 
        "legacy_id": 334, 
        "longitude": 17.8800831426576, 
        "name": "Balatonf\u00f6ldv\u00e1r"
      }, 
      {
        "id": "005504416", 
        "is_domestic": true, 
        "latitude": 46.956030040575, 
        "legacy_id": 335, 
        "longitude": 17.8832934232644, 
        "name": "Balatonf\u00fcred"
      }, 
      {
        "id": "005504358", 
        "is_domestic": true, 
        "latitude": 47.0598504723118, 
        "legacy_id": 336, 
        "longitude": 18.0426961654691, 
        "name": "Balatonf\u0171zf\u0151"
      }, 
      {
        "id": "005504788", 
        "is_domestic": true, 
        "latitude": 46.7519423099569, 
        "legacy_id": 337, 
        "longitude": 17.3541435769754, 
        "name": "Balatongy\u00f6r\u00f6k"
      }, 
      {
        "id": "005504341", 
        "is_domestic": true, 
        "latitude": 47.0324810167327, 
        "legacy_id": 338, 
        "longitude": 18.105619039235, 
        "name": "Balatonkenese"
      }, 
      {
        "id": "005504333_18", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7412, 
        "longitude": null, 
        "name": "Balatonkenese-\u00dcd\u00fcl\u0151telep (Csitt\u00e9nyhegy)"
      }, 
      {
        "id": "005503459", 
        "is_domestic": true, 
        "latitude": 46.7874744561778, 
        "legacy_id": 340, 
        "longitude": 17.6942556519146, 
        "name": "Balatonlelle"
      }, 
      {
        "id": "005503442", 
        "is_domestic": true, 
        "latitude": 46.7947228937021, 
        "legacy_id": 341, 
        "longitude": 17.7198794747937, 
        "name": "Balatonlelle fels\u0151"
      }, 
      {
        "id": "005503541", 
        "is_domestic": true, 
        "latitude": 46.7041462848337, 
        "legacy_id": 342, 
        "longitude": 17.3749606856427, 
        "name": "Balatonm\u00e1riaf\u00fcrd\u0151"
      }, 
      {
        "id": "005504515", 
        "is_domestic": true, 
        "latitude": 46.8255012543755, 
        "legacy_id": 344, 
        "longitude": 17.5840855899427, 
        "name": "Balatonrendes"
      }, 
      {
        "id": "005503426", 
        "is_domestic": true, 
        "latitude": 46.8318976307712, 
        "legacy_id": 345, 
        "longitude": 17.8303615570583, 
        "name": "Balatonsz\u00e1rsz\u00f3"
      }, 
      {
        "id": "005503434", 
        "is_domestic": true, 
        "latitude": 46.8116519754734, 
        "legacy_id": 346, 
        "longitude": 17.7759917242329, 
        "name": "Balatonszemes"
      }, 
      {
        "id": "005503566", 
        "is_domestic": true, 
        "latitude": 46.6925759614405, 
        "legacy_id": 347, 
        "longitude": 17.2885406016183, 
        "name": "Balatonszentgy\u00f6rgy"
      }, 
      {
        "id": "005504481", 
        "is_domestic": true, 
        "latitude": 46.8511605430272, 
        "legacy_id": 348, 
        "longitude": 17.6630505373357, 
        "name": "Balatonszepezd"
      }, 
      {
        "id": "005503376", 
        "is_domestic": true, 
        "latitude": 46.8918946386229, 
        "legacy_id": 349, 
        "longitude": 17.9933002833432, 
        "name": "Balatonsz\u00e9plak als\u00f3"
      }, 
      {
        "id": "005503368", 
        "is_domestic": true, 
        "latitude": 46.898001053013, 
        "legacy_id": 350, 
        "longitude": 18.0181141393196, 
        "name": "Balatonsz\u00e9plak fels\u0151"
      }, 
      {
        "id": "005504440", 
        "is_domestic": true, 
        "latitude": 46.9047717793033, 
        "legacy_id": 351, 
        "longitude": 17.8078537840224, 
        "name": "Balatonudvari"
      }, 
      {
        "id": "005503327", 
        "is_domestic": true, 
        "latitude": 46.9637575995532, 
        "legacy_id": 352, 
        "longitude": 18.1576620887631, 
        "name": "Balatonvil\u00e1gos"
      }, 
      {
        "id": "005503319_19", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6648, 
        "longitude": null, 
        "name": "B.aliga (Balatonaliga)"
      }, 
      {
        "id": "005504366_20", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6821, 
        "longitude": null, 
        "name": "B.alm\u00e1di (Balatonalm\u00e1di)"
      }, 
      {
        "id": "005514506", 
        "is_domestic": true, 
        "latitude": 47.6137668464941, 
        "legacy_id": 359, 
        "longitude": 21.3478818481347, 
        "name": "Balmaz\u00fajv\u00e1ros"
      }, 
      {
        "id": "004302261_21", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 361, 
        "longitude": null, 
        "name": "Balogunyom (J\u00e1k-Balogunyom)"
      }, 
      {
        "id": "005322606", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 363, 
        "longitude": null, 
        "name": "Balota"
      }, 
      {
        "id": "005516329", 
        "is_domestic": true, 
        "latitude": 46.3492895368492, 
        "legacy_id": 365, 
        "longitude": 19.5331973780959, 
        "name": "Balotasz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005332261_22", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 377, 
        "longitude": null, 
        "name": "B\u00e1nffyhunyad (Huedin)"
      }, 
      {
        "id": "005542481", 
        "is_domestic": true, 
        "latitude": 47.3249682236804, 
        "legacy_id": 378, 
        "longitude": 20.665805161564, 
        "name": "B\u00e1nhalma-Halast\u00f3"
      }, 
      {
        "id": "005541129", 
        "is_domestic": true, 
        "latitude": 47.5739322225939, 
        "legacy_id": 379, 
        "longitude": 18.3720921633684, 
        "name": "B\u00e1nhida"
      }, 
      {
        "id": "005519299", 
        "is_domestic": true, 
        "latitude": 46.5052844149511, 
        "legacy_id": 382, 
        "longitude": 21.0942399767289, 
        "name": "B\u00e1nk\u00fat"
      }, 
      {
        "id": "005512849", 
        "is_domestic": true, 
        "latitude": 48.2997800802784, 
        "legacy_id": 388, 
        "longitude": 20.3523112926196, 
        "name": "B\u00e1nr\u00e9ve"
      }, 
      {
        "id": "005541558", 
        "is_domestic": true, 
        "latitude": 48.284301643768, 
        "legacy_id": 389, 
        "longitude": 20.3680912012445, 
        "name": "B\u00e1nr\u00e9vei V\u00edzm\u0171"
      }, 
      {
        "id": "005511866_23", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6679, 
        "longitude": null, 
        "name": "B\u00e1nyatelep (Kisterenye-B\u00e1nyatelep)"
      }, 
      {
        "id": "005504408_24", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6843, 
        "longitude": null, 
        "name": "B.ar\u00e1cs (Balatonar\u00e1cs)"
      }, 
      {
        "id": "005503186", 
        "is_domestic": true, 
        "latitude": 47.2981299503437, 
        "legacy_id": 397, 
        "longitude": 18.7551712890605, 
        "name": "Baracska"
      }, 
      {
        "id": "005514407", 
        "is_domestic": true, 
        "latitude": 47.2996280589717, 
        "legacy_id": 399, 
        "longitude": 21.2351736173285, 
        "name": "B\u00e1r\u00e1nd"
      }, 
      {
        "id": "008103024_25", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7327, 
        "longitude": null, 
        "name": "Bar\u00e1tudvar-F\u00e9ltorony (M\u00f6nchhof-Halbturn [\u00d6BB])"
      }, 
      {
        "id": "005505660", 
        "is_domestic": true, 
        "latitude": 45.9519085391513, 
        "legacy_id": 409, 
        "longitude": 17.4466382443607, 
        "name": "Barcs"
      }, 
      {
        "id": "005505678", 
        "is_domestic": true, 
        "latitude": 45.9583419387013, 
        "legacy_id": 410, 
        "longitude": 17.4860265373614, 
        "name": "Barcs fels\u0151"
      }, 
      {
        "id": "005547399", 
        "is_domestic": true, 
        "latitude": 47.3987248152334, 
        "legacy_id": 416, 
        "longitude": 18.9893728813879, 
        "name": "Barosstelep"
      }, 
      {
        "id": "005514910", 
        "is_domestic": true, 
        "latitude": 48.0260798673501, 
        "legacy_id": 428, 
        "longitude": 21.5145525503702, 
        "name": "Bashalom"
      }, 
      {
        "id": "005507146", 
        "is_domestic": true, 
        "latitude": 46.2024722127936, 
        "legacy_id": 429, 
        "longitude": 18.7150442644928, 
        "name": "B\u00e1tasz\u00e9k"
      }, 
      {
        "id": "005506247", 
        "is_domestic": true, 
        "latitude": 46.3556069441299, 
        "legacy_id": 430, 
        "longitude": 17.9607733826099, 
        "name": "Bat\u00e9"
      }, 
      {
        "id": "002238250", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6849, 
        "longitude": null, 
        "name": "Batevo"
      }, 
      {
        "id": "005347319_26", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 433, 
        "longitude": null, 
        "name": "Batiz (Botiz)"
      }, 
      {
        "id": "005519323", 
        "is_domestic": true, 
        "latitude": 46.2819786368012, 
        "legacy_id": 434, 
        "longitude": 21.0043166500805, 
        "name": "Battonya"
      }, 
      {
        "id": "005504846_27", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 437, 
        "longitude": null, 
        "name": "Batyk (Zalab\u00e9r-Batyk)"
      }, 
      {
        "id": "002238250_28", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6751, 
        "longitude": null, 
        "name": "B\u00e1ty\u00fa (Batevo)"
      }, 
      {
        "id": "008133216", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 438, 
        "longitude": null, 
        "name": "Baumgarten"
      }, 
      {
        "id": "005504655_29", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6790, 
        "longitude": null, 
        "name": "Bazaltb\u00e1nya (S\u00fcmegi Bazaltb\u00e1nya)"
      }, 
      {
        "id": "005503558_30", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6812, 
        "longitude": null, 
        "name": "B.ber\u00e9ny (Balatonber\u00e9ny)"
      }, 
      {
        "id": "005503475_31", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6696, 
        "longitude": null, 
        "name": "B.bogl\u00e1r (Balatonbogl\u00e1r)"
      }, 
      {
        "id": "005504796", 
        "is_domestic": true, 
        "latitude": 46.7760159024261, 
        "legacy_id": 450, 
        "longitude": 17.3725626068262, 
        "name": "Becehegy"
      }, 
      {
        "id": "005341054", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 452, 
        "longitude": null, 
        "name": "Beclean Pe Somes"
      }, 
      {
        "id": "008108000_32", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 453, 
        "longitude": null, 
        "name": "B\u00e9cs (WIEN*)"
      }, 
      {
        "id": "005541244", 
        "is_domestic": true, 
        "latitude": 47.8955983343392, 
        "legacy_id": 455, 
        "longitude": 19.3669955770605, 
        "name": "Becske als\u00f3"
      }, 
      {
        "id": "005504804_33", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6664, 
        "longitude": null, 
        "name": "B.ederics (Balatonederics)"
      }, 
      {
        "id": "005518036", 
        "is_domestic": true, 
        "latitude": 46.6692165341288, 
        "legacy_id": 458, 
        "longitude": 21.082009695858, 
        "name": "B\u00e9k\u00e9scsaba"
      }, 
      {
        "id": "005512476", 
        "is_domestic": true, 
        "latitude": 48.0557045867082, 
        "legacy_id": 461, 
        "longitude": 20.3405135941486, 
        "name": "B\u00e9lap\u00e1tfalva"
      }, 
      {
        "id": "005512484", 
        "is_domestic": true, 
        "latitude": 48.0575900082992, 
        "legacy_id": 462, 
        "longitude": 20.3530091818801, 
        "name": "B\u00e9lap\u00e1tfalvi Cementgy\u00e1r"
      }, 
      {
        "id": "005503509", 
        "is_domestic": true, 
        "latitude": 46.7376101876286, 
        "legacy_id": 463, 
        "longitude": 17.5349884875876, 
        "name": "B\u00e9latelep"
      }, 
      {
        "id": "005505611", 
        "is_domestic": true, 
        "latitude": 46.1228796345456, 
        "legacy_id": 464, 
        "longitude": 17.2075745828775, 
        "name": "B\u00e9lav\u00e1r"
      }, 
      {
        "id": "005546029", 
        "is_domestic": true, 
        "latitude": 46.6396192243915, 
        "legacy_id": 465, 
        "longitude": 18.4114569991163, 
        "name": "Belecska"
      }, 
      {
        "id": "004302402", 
        "is_domestic": true, 
        "latitude": 47.4666132122881, 
        "legacy_id": 466, 
        "longitude": 17.085095421081, 
        "name": "Beled"
      }, 
      {
        "id": "005506353", 
        "is_domestic": true, 
        "latitude": 46.3168118021296, 
        "legacy_id": 467, 
        "longitude": 17.420434078247, 
        "name": "Beleg"
      }, 
      {
        "id": "005505553", 
        "is_domestic": true, 
        "latitude": 46.3262630080532, 
        "legacy_id": 468, 
        "longitude": 16.8774304787853, 
        "name": "Belezna"
      }, 
      {
        "id": "007871705", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6606, 
        "longitude": null, 
        "name": "Beli Manastir"
      }, 
      {
        "id": "005505868_34", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6613, 
        "longitude": null, 
        "name": "Beloiannisz (Iv\u00e1ncsa)"
      }, 
      {
        "id": "005504119", 
        "is_domestic": true, 
        "latitude": 47.1028187034005, 
        "legacy_id": 481, 
        "longitude": 18.4997748795344, 
        "name": "Bels\u0151b\u00e1r\u00e1nd"
      }, 
      {
        "id": "005542978", 
        "is_domestic": true, 
        "latitude": 46.3412621831228, 
        "legacy_id": 482, 
        "longitude": 20.8485254069123, 
        "name": "Bels\u0151kamar\u00e1spuszta"
      }, 
      {
        "id": "005519307", 
        "is_domestic": true, 
        "latitude": 46.3202543702163, 
        "legacy_id": 483, 
        "longitude": 20.9061544872845, 
        "name": "Bels\u0151peregpuszta"
      }, 
      {
        "id": "007216052", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 8214, 
        "longitude": null, 
        "name": "Beograd Centar"
      }, 
      {
        "id": "005514225", 
        "is_domestic": true, 
        "latitude": 47.3748502319321, 
        "legacy_id": 494, 
        "longitude": 20.8273415464455, 
        "name": "Berekf\u00fcrd\u0151"
      }, 
      {
        "id": "005512757", 
        "is_domestic": true, 
        "latitude": 48.2386946205473, 
        "legacy_id": 495, 
        "longitude": 20.6729004424952, 
        "name": "Berente"
      }, 
      {
        "id": "005514423", 
        "is_domestic": true, 
        "latitude": 47.2122334733219, 
        "legacy_id": 496, 
        "longitude": 21.5322404983994, 
        "name": "Beretty\u00f3\u00fajfalu"
      }, 
      {
        "id": "005510629", 
        "is_domestic": true, 
        "latitude": 47.8855258747064, 
        "legacy_id": 503, 
        "longitude": 19.0715288610412, 
        "name": "Berkenye"
      }, 
      {
        "id": "008062648", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 504, 
        "longitude": null, 
        "name": "BERLIN*"
      }, 
      {
        "id": "008065969", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 506, 
        "longitude": null, 
        "name": "Berlin Hbf"
      }, 
      {
        "id": "008031922", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 507, 
        "longitude": null, 
        "name": "Berlin Hbf (Tief)"
      }, 
      {
        "id": "008003004", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 508, 
        "longitude": null, 
        "name": "Berlin Ostbahnhof"
      }, 
      {
        "id": "008065971", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 509, 
        "longitude": null, 
        "name": "Berlin S\u00fcdkreuz"
      }, 
      {
        "id": "008003034", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Berlin-Charlottenbg."
      }, 
      {
        "id": "008003025", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 512, 
        "longitude": null, 
        "name": "Berlin-Spandau"
      }, 
      {
        "id": "005505595", 
        "is_domestic": true, 
        "latitude": 46.2012472285071, 
        "legacy_id": 520, 
        "longitude": 17.143796830538, 
        "name": "Berzence"
      }, 
      {
        "id": "005505868_35", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6614, 
        "longitude": null, 
        "name": "Besny\u0151 (Iv\u00e1ncsa)"
      }, 
      {
        "id": "005341054_36", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 527, 
        "longitude": null, 
        "name": "Bethlen (Beclean Pe Somes)"
      }, 
      {
        "id": "004347431", 
        "is_domestic": true, 
        "latitude": 47.973296, 
        "legacy_id": 529, 
        "longitude": 17.207873, 
        "name": "Bezenye"
      }, 
      {
        "id": "005503525_37", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6761, 
        "longitude": null, 
        "name": "B.fenyves (Balatonfenyves)"
      }, 
      {
        "id": "005503483_38", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6694, 
        "longitude": null, 
        "name": "B.fenyves als\u00f3 (Balatonfenyves als\u00f3)"
      }, 
      {
        "id": "005549452_39", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6853, 
        "longitude": null, 
        "name": "B.fenyves GV (Balatonfenyves GV)"
      }, 
      {
        "id": "005547308_40", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6690, 
        "longitude": null, 
        "name": "B.f\u0151kaj\u00e1r fels\u0151 (Balatonf\u0151kaj\u00e1r fels\u0151)"
      }, 
      {
        "id": "005503418_41", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6632, 
        "longitude": null, 
        "name": "B.f\u00f6ldv\u00e1r (Balatonf\u00f6ldv\u00e1r)"
      }, 
      {
        "id": "005504416_42", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6765, 
        "longitude": null, 
        "name": "B.f\u00fcred (Balatonf\u00fcred)"
      }, 
      {
        "id": "005504358_43", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6647, 
        "longitude": null, 
        "name": "B.f\u00fczf\u0151 (Balatonf\u0171zf\u0151)"
      }, 
      {
        "id": "005504788_44", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6840, 
        "longitude": null, 
        "name": "B.gy\u00f6r\u00f6k (Balatongy\u00f6r\u00f6k)"
      }, 
      {
        "id": "005501057", 
        "is_domestic": true, 
        "latitude": 47.4798682139984, 
        "legacy_id": 532, 
        "longitude": 18.8344660227594, 
        "name": "Biatorb\u00e1gy"
      }, 
      {
        "id": "005518689", 
        "is_domestic": true, 
        "latitude": 46.6598896832577, 
        "legacy_id": 536, 
        "longitude": 21.1794749783131, 
        "name": "Bicere"
      }, 
      {
        "id": "005507278", 
        "is_domestic": true, 
        "latitude": 46.0411465749434, 
        "legacy_id": 540, 
        "longitude": 18.0540340017933, 
        "name": "Bics\u00e9rd"
      }, 
      {
        "id": "005501081", 
        "is_domestic": true, 
        "latitude": 47.4843100376845, 
        "legacy_id": 541, 
        "longitude": 18.6184560821317, 
        "name": "Bicske"
      }, 
      {
        "id": "005540170", 
        "is_domestic": true, 
        "latitude": 47.4865399180115, 
        "legacy_id": 542, 
        "longitude": 18.6432457445197, 
        "name": "Bicske als\u00f3"
      }, 
      {
        "id": "005344989_45", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 547, 
        "longitude": null, 
        "name": "Bihar (Biharia)"
      }, 
      {
        "id": "005345048_46", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 548, 
        "longitude": null, 
        "name": "Bihardi\u00f3szeg (Diosig)"
      }, 
      {
        "id": "005344989", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 549, 
        "longitude": null, 
        "name": "Biharia"
      }, 
      {
        "id": "005514449", 
        "is_domestic": true, 
        "latitude": 47.1354270744317, 
        "legacy_id": 550, 
        "longitude": 21.7218663870529, 
        "name": "Biharkeresztes"
      }, 
      {
        "id": "005514324", 
        "is_domestic": true, 
        "latitude": 47.2088420241607, 
        "legacy_id": 551, 
        "longitude": 21.2217956407186, 
        "name": "Biharnagybajom"
      }, 
      {
        "id": "005332742_47", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 552, 
        "longitude": null, 
        "name": "Biharp\u00fcsp\u00f6ki (Episcopia Bihor)"
      }, 
      {
        "id": "008101134", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 559, 
        "longitude": null, 
        "name": "Bischofshofen"
      }, 
      {
        "id": "005504341_48", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6827, 
        "longitude": null, 
        "name": "B.kenese (Balatonkenese)"
      }, 
      {
        "id": "005504333_49", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7413, 
        "longitude": null, 
        "name": "B.kenese-\u00dcd\u00fcl\u0151telep (Csitt\u00e9nyhegy)"
      }, 
      {
        "id": "005331530", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 568, 
        "longitude": null, 
        "name": "Blaj"
      }, 
      {
        "id": "005433095", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 9999, 
        "longitude": null, 
        "name": "Blansko"
      }, 
      {
        "id": "005503459_50", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6773, 
        "longitude": null, 
        "name": "B.lelle (Balatonlelle)"
      }, 
      {
        "id": "005503442_51", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6634, 
        "longitude": null, 
        "name": "B.lelle fels\u0151 (Balatonlelle fels\u0151)"
      }, 
      {
        "id": "008101230", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 576, 
        "longitude": null, 
        "name": "Bludenz"
      }, 
      {
        "id": "005503541_52", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6683, 
        "longitude": null, 
        "name": "B.m\u00e1riaf\u0171rd\u0151 (Balatonm\u00e1riaf\u00fcrd\u0151)"
      }, 
      {
        "id": "005503533_53", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6805, 
        "longitude": null, 
        "name": "B.m\u00e1riaf\u0171rd\u0151 als\u00f3 (M\u00e1riahull\u00e1mtelep)"
      }, 
      {
        "id": "005504093", 
        "is_domestic": true, 
        "latitude": 47.1826460646972, 
        "legacy_id": 578, 
        "longitude": 17.1912876888672, 
        "name": "Boba"
      }, 
      {
        "id": "005504911", 
        "is_domestic": true, 
        "latitude": 46.7782397833344, 
        "legacy_id": 581, 
        "longitude": 16.8532405050289, 
        "name": "Bocf\u00f6lde"
      }, 
      {
        "id": "005513946", 
        "is_domestic": true, 
        "latitude": 47.6406347628745, 
        "legacy_id": 588, 
        "longitude": 21.6659890001602, 
        "name": "Bocskaikert"
      }, 
      {
        "id": "005503707", 
        "is_domestic": true, 
        "latitude": 47.3179488910162, 
        "legacy_id": 590, 
        "longitude": 18.2518126190884, 
        "name": "Bodajk"
      }, 
      {
        "id": "005545450", 
        "is_domestic": true, 
        "latitude": 46.1999876434838, 
        "legacy_id": 593, 
        "longitude": 18.1288090901162, 
        "name": "Bodolyab\u00e9r"
      }, 
      {
        "id": "005513417", 
        "is_domestic": true, 
        "latitude": 48.1758562873695, 
        "legacy_id": 594, 
        "longitude": 21.3543216514443, 
        "name": "Bodrogkereszt\u00far"
      }, 
      {
        "id": "005513417_54", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6616, 
        "longitude": null, 
        "name": "Bodrogkisfalud (Bodrogkereszt\u00far)"
      }, 
      {
        "id": "005513458", 
        "is_domestic": true, 
        "latitude": 48.2852287225519, 
        "legacy_id": 595, 
        "longitude": 21.5121812985712, 
        "name": "Bodrogolaszi"
      }, 
      {
        "id": "005513029", 
        "is_domestic": true, 
        "latitude": 48.5375004812034, 
        "legacy_id": 597, 
        "longitude": 20.7378673387376, 
        "name": "B\u00f3dvaszilas"
      }, 
      {
        "id": "005503475_55", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6713, 
        "longitude": null, 
        "name": "Bogl\u00e1r (Balatonbogl\u00e1r)"
      }, 
      {
        "id": "005434124", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 605, 
        "longitude": null, 
        "name": "Bohumin"
      }, 
      {
        "id": "008133025_56", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 609, 
        "longitude": null, 
        "name": "Boldogasszony (Frauenkirchen)"
      }, 
      {
        "id": "005513334", 
        "is_domestic": true, 
        "latitude": 48.34493441291, 
        "legacy_id": 610, 
        "longitude": 21.2088625917103, 
        "name": "Boldogk\u0151v\u00e1ralja"
      }, 
      {
        "id": "005512914", 
        "is_domestic": true, 
        "latitude": 48.2232023189544, 
        "legacy_id": 612, 
        "longitude": 20.7903349695065, 
        "name": "Boldva"
      }, 
      {
        "id": "005506387", 
        "is_domestic": true, 
        "latitude": 46.2821526628221, 
        "legacy_id": 616, 
        "longitude": 17.2751970185144, 
        "name": "Bolh\u00e1s"
      }, 
      {
        "id": "005507765", 
        "is_domestic": true, 
        "latitude": 45.9376654932913, 
        "legacy_id": 623, 
        "longitude": 18.5383016457272, 
        "name": "B\u00f3ly"
      }, 
      {
        "id": "005508292", 
        "is_domestic": true, 
        "latitude": 46.6096285479771, 
        "legacy_id": 628, 
        "longitude": 17.9106602211813, 
        "name": "Bonnya"
      }, 
      {
        "id": "005507088_57", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 627, 
        "longitude": null, 
        "name": "Bonyh\u00e1d (Hidas-Bonyh\u00e1d)"
      }, 
      {
        "id": "005544776", 
        "is_domestic": true, 
        "latitude": 46.769798352101, 
        "legacy_id": 635, 
        "longitude": 19.9128917005268, 
        "name": "Borsihalom"
      }, 
      {
        "id": "005512922", 
        "is_domestic": true, 
        "latitude": 48.2590670129063, 
        "legacy_id": 637, 
        "longitude": 20.7707020270787, 
        "name": "Borsodszir\u00e1k"
      }, 
      {
        "id": "005510652", 
        "is_domestic": true, 
        "latitude": 47.9731777706033, 
        "legacy_id": 638, 
        "longitude": 19.0948574119952, 
        "name": "Borsosber\u00e9ny"
      }, 
      {
        "id": "005347319", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 647, 
        "longitude": null, 
        "name": "Botiz"
      }, 
      {
        "id": "007873112", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 655, 
        "longitude": null, 
        "name": "Bozjakovina"
      }, 
      {
        "id": "005511403_58", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 657, 
        "longitude": null, 
        "name": "B\u0151cs (Hern\u00e1dn\u00e9meti-B\u0151cs)"
      }, 
      {
        "id": "005504101", 
        "is_domestic": true, 
        "latitude": 47.1400533965803, 
        "legacy_id": 660, 
        "longitude": 18.5152123376293, 
        "name": "B\u00f6rg\u00f6nd"
      }, 
      {
        "id": "004302360", 
        "is_domestic": true, 
        "latitude": 47.6854799840682, 
        "legacy_id": 661, 
        "longitude": 17.234391875524, 
        "name": "B\u0151s\u00e1rk\u00e1ny"
      }, 
      {
        "id": "005516212", 
        "is_domestic": true, 
        "latitude": 46.9383191381323, 
        "legacy_id": 662, 
        "longitude": 19.1595211634017, 
        "name": "B\u00f6szt\u00f6r"
      }, 
      {
        "id": "005510009_59", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 668, 
        "longitude": null, 
        "name": "Bp (BUDAPEST*)"
      }, 
      {
        "id": "005330691", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 9951, 
        "longitude": null, 
        "name": "Bra\u015fov"
      }, 
      {
        "id": "005330691_60", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 9952, 
        "longitude": null, 
        "name": "Brass\u00f3 (Bra\u015fov)"
      }, 
      {
        "id": "005332388", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 691, 
        "longitude": null, 
        "name": "Bratca"
      }, 
      {
        "id": "005620000", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 693, 
        "longitude": null, 
        "name": "BRATISLAVA*"
      }, 
      {
        "id": "005613206", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 694, 
        "longitude": null, 
        "name": "Bratislava hl. st."
      }, 
      {
        "id": "005614576", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 698, 
        "longitude": null, 
        "name": "Bratislava-Petrzalka"
      }, 
      {
        "id": "005433425", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 709, 
        "longitude": null, 
        "name": "Breclav"
      }, 
      {
        "id": "005504515_61", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6643, 
        "longitude": null, 
        "name": "B.rendes (Balatonrendes)"
      }, 
      {
        "id": "005408994", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 746, 
        "longitude": null, 
        "name": "BRNO*"
      }, 
      {
        "id": "005438015", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 9948, 
        "longitude": null, 
        "name": "Brno dolni nadrazi"
      }, 
      {
        "id": "005433295", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 747, 
        "longitude": null, 
        "name": "Brno hl. n."
      }, 
      {
        "id": "005433395", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 8336, 
        "longitude": null, 
        "name": "Brno-Zidenice"
      }, 
      {
        "id": "008102974", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 754, 
        "longitude": null, 
        "name": "Bruck a.d. Leitha"
      }, 
      {
        "id": "005408994_62", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 778, 
        "longitude": null, 
        "name": "Br\u00fcnn (BRNO*)"
      }, 
      {
        "id": "005107722", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7933, 
        "longitude": null, 
        "name": "Brzeszcze Jawiszowice"
      }, 
      {
        "id": "005503426_63", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6829, 
        "longitude": null, 
        "name": "B.sz\u00e1rsz\u00f3 (Balatonsz\u00e1rsz\u00f3)"
      }, 
      {
        "id": "005503434_64", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6682, 
        "longitude": null, 
        "name": "B.szemes (Balatonszemes)"
      }, 
      {
        "id": "005503566_65", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6699, 
        "longitude": null, 
        "name": "B.szentgy\u00f6rgy (Balatonszentgy\u00f6rgy)"
      }, 
      {
        "id": "005504481_66", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6857, 
        "longitude": null, 
        "name": "B.szepezd (Balatonszepezd)"
      }, 
      {
        "id": "005503376_67", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6691, 
        "longitude": null, 
        "name": "B.sz\u00e9plak als\u00f3 (Balatonsz\u00e9plak als\u00f3)"
      }, 
      {
        "id": "005503368_68", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6755, 
        "longitude": null, 
        "name": "B.sz\u00e9plak fels\u0151 (Balatonsz\u00e9plak fels\u0151)"
      }, 
      {
        "id": "008509404", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 789, 
        "longitude": null, 
        "name": "Buchs Sg"
      }, 
      {
        "id": "008101244", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6795, 
        "longitude": null, 
        "name": "Buchs(SG)"
      }, 
      {
        "id": "005505405", 
        "is_domestic": true, 
        "latitude": 46.7922458242988, 
        "legacy_id": 799, 
        "longitude": 16.9325525540038, 
        "name": "B\u00facs\u00faszentl\u00e1szl\u00f3"
      }, 
      {
        "id": "005399999", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 791, 
        "longitude": null, 
        "name": "BUCURESTI*"
      }, 
      {
        "id": "005310017", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6770, 
        "longitude": null, 
        "name": "Bucure\u015fti Nord"
      }, 
      {
        "id": "005545955", 
        "is_domestic": true, 
        "latitude": 46.8516265792854, 
        "legacy_id": 801, 
        "longitude": 16.6246872685885, 
        "name": "Budafa"
      }, 
      {
        "id": "005503129", 
        "is_domestic": true, 
        "latitude": 47.4237600831436, 
        "legacy_id": 802, 
        "longitude": 19.0414299772641, 
        "name": "Budafok"
      }, 
      {
        "id": "005503111_69", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 803, 
        "longitude": null, 
        "name": "Budafok-Albertfalva (Albertfalva)"
      }, 
      {
        "id": "005503129_70", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 804, 
        "longitude": null, 
        "name": "Budafok-Belv\u00e1ros (Budafok)"
      }, 
      {
        "id": "005541418", 
        "is_domestic": true, 
        "latitude": 47.2084034447925, 
        "legacy_id": 807, 
        "longitude": 19.7310875898551, 
        "name": "Budai \u00fat"
      }, 
      {
        "id": "005501032", 
        "is_domestic": true, 
        "latitude": 47.4477362657445, 
        "legacy_id": 808, 
        "longitude": 18.9649707872022, 
        "name": "Buda\u00f6rs"
      }, 
      {
        "id": "005510009", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 809, 
        "longitude": null, 
        "name": "BUDAPEST*"
      }, 
      {
        "id": "005501016_71", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 812, 
        "longitude": null, 
        "name": "Budapest D\u00e9li (Budapest-D\u00e9li)"
      }, 
      {
        "id": "005510025_72", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 814, 
        "longitude": null, 
        "name": "Budapest Ferencv\u00e1ros (Ferencv\u00e1ros)"
      }, 
      {
        "id": "005513615_73", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 815, 
        "longitude": null, 
        "name": "Budapest Ferihegy (Ferihegy)"
      }, 
      {
        "id": "005501024_74", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 817, 
        "longitude": null, 
        "name": "Budapest Kelenf\u00f6ld (Kelenf\u00f6ld)"
      }, 
      {
        "id": "005510017_75", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 818, 
        "longitude": null, 
        "name": "Budapest Keleti (Budapest-Keleti)"
      }, 
      {
        "id": "005510173_76", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6636, 
        "longitude": null, 
        "name": "Budapest K\u0151b\u00e1nya-Kispest (K\u0151b\u00e1nya-Kispest)"
      }, 
      {
        "id": "005510033_77", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 820, 
        "longitude": null, 
        "name": "Budapest Nyugati (Budapest-Nyugati)"
      }, 
      {
        "id": "005510116_78", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 823, 
        "longitude": null, 
        "name": "Budapest Soroks\u00e1ri \u00fat (Soroks\u00e1ri \u00fat)"
      }, 
      {
        "id": "005501412_79", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 824, 
        "longitude": null, 
        "name": "Budapest \u00dcr\u00f6m (\u00dcr\u00f6m)"
      }, 
      {
        "id": "005510090_80", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 825, 
        "longitude": null, 
        "name": "Budapest Zugl\u00f3 (Zugl\u00f3)"
      }, 
      {
        "id": "005510124_81", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6721, 
        "longitude": null, 
        "name": "Budapest-Angyalf\u00f6ld (Angyalf\u00f6ld)"
      }, 
      {
        "id": "005501016", 
        "is_domestic": true, 
        "latitude": 47.4993914367586, 
        "legacy_id": 826, 
        "longitude": 19.0255441339548, 
        "name": "Budapest-D\u00e9li"
      }, 
      {
        "id": "005510017", 
        "is_domestic": true, 
        "latitude": 47.500229555633, 
        "legacy_id": 829, 
        "longitude": 19.0838720011161, 
        "name": "Budapest-Keleti"
      }, 
      {
        "id": "005510033", 
        "is_domestic": true, 
        "latitude": 47.5127182973784, 
        "legacy_id": 830, 
        "longitude": 19.0608576203505, 
        "name": "Budapest-Nyugati"
      }, 
      {
        "id": "005540543", 
        "is_domestic": true, 
        "latitude": 47.4051143785965, 
        "legacy_id": 834, 
        "longitude": 19.016369905445, 
        "name": "Budat\u00e9t\u00e9ny"
      }, 
      {
        "id": "005504440_82", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6707, 
        "longitude": null, 
        "name": "B.udvari (Balatonudvari)"
      }, 
      {
        "id": "005341767", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 862, 
        "longitude": null, 
        "name": "Busag"
      }, 
      {
        "id": "005341767_83", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 863, 
        "longitude": null, 
        "name": "Bus\u00e1g (Busag)"
      }, 
      {
        "id": "005330548", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 865, 
        "longitude": null, 
        "name": "Busteni"
      }, 
      {
        "id": "008001054", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 875, 
        "longitude": null, 
        "name": "B\u00fcchen"
      }, 
      {
        "id": "005541517", 
        "is_domestic": true, 
        "latitude": 48.3739005203137, 
        "legacy_id": 876, 
        "longitude": 20.7255982046853, 
        "name": "B\u00fcd\u00f6sk\u00fatpuszta"
      }, 
      {
        "id": "004305231", 
        "is_domestic": true, 
        "latitude": 47.3887703068438, 
        "legacy_id": 877, 
        "longitude": 16.7522814063771, 
        "name": "B\u00fck"
      }, 
      {
        "id": "005507245", 
        "is_domestic": true, 
        "latitude": 46.1131163558173, 
        "legacy_id": 878, 
        "longitude": 17.9994669952899, 
        "name": "B\u00fckk\u00f6sd"
      }, 
      {
        "id": "005503327_84", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6799, 
        "longitude": null, 
        "name": "B.vil\u00e1gos (Balatonvil\u00e1gos)"
      }, 
      {
        "id": "005345062", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 899, 
        "longitude": null, 
        "name": "Cadia"
      }, 
      {
        "id": "005331827", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 919, 
        "longitude": null, 
        "name": "Campia Turzii"
      }, 
      {
        "id": "005310574", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 937, 
        "longitude": null, 
        "name": "Caracal"
      }, 
      {
        "id": "005311554", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6803, 
        "longitude": null, 
        "name": "Caransebe\u015f"
      }, 
      {
        "id": "005345323", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 945, 
        "longitude": null, 
        "name": "Carei"
      }, 
      {
        "id": "007873104", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 946, 
        "longitude": null, 
        "name": "Carevdar"
      }, 
      {
        "id": "005506650", 
        "is_domestic": true, 
        "latitude": 46.7723247300156, 
        "legacy_id": 963, 
        "longitude": 18.623790660988, 
        "name": "Cece"
      }, 
      {
        "id": "005335433", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 965, 
        "longitude": null, 
        "name": "Cefa"
      }, 
      {
        "id": "005513722", 
        "is_domestic": true, 
        "latitude": 47.1821110109582, 
        "legacy_id": 966, 
        "longitude": 19.8070740893064, 
        "name": "Cegl\u00e9d"
      }, 
      {
        "id": "005541384", 
        "is_domestic": true, 
        "latitude": 47.2165205324933, 
        "legacy_id": 967, 
        "longitude": 19.6573108118856, 
        "name": "Cegl\u00e9dbercel"
      }, 
      {
        "id": "005513714", 
        "is_domestic": true, 
        "latitude": 47.210852905199, 
        "legacy_id": 968, 
        "longitude": 19.6861691684773, 
        "name": "Cegl\u00e9dbercel-Cser\u0151"
      }, 
      {
        "id": "005546102", 
        "is_domestic": true, 
        "latitude": 47.1690545899834, 
        "legacy_id": 969, 
        "longitude": 19.8263674272988, 
        "name": "Cegl\u00e9di sz\u00e1ll\u00e1sok"
      }, 
      {
        "id": "007943100", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 970, 
        "longitude": null, 
        "name": "Celje"
      }, 
      {
        "id": "005502170", 
        "is_domestic": true, 
        "latitude": 47.2612465646999, 
        "legacy_id": 972, 
        "longitude": 17.1520200745229, 
        "name": "Celld\u00f6m\u00f6lk"
      }, 
      {
        "id": "005512484_85", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6757, 
        "longitude": null, 
        "name": "Cementgy\u00e1r (B\u00e9lap\u00e1tfalvi Cementgy\u00e1r)"
      }, 
      {
        "id": "005453913", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6789, 
        "longitude": null, 
        "name": "\u010cesk\u00e1 Trebov\u00e1"
      }, 
      {
        "id": "005106790", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Chalupki"
      }, 
      {
        "id": "005453813", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7936, 
        "longitude": null, 
        "name": "Chocen"
      }, 
      {
        "id": "002238010", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1018, 
        "longitude": null, 
        "name": "Chop"
      }, 
      {
        "id": "005341779", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1030, 
        "longitude": null, 
        "name": "Cicarlau"
      }, 
      {
        "id": "005545484", 
        "is_domestic": true, 
        "latitude": 46.2635195862574, 
        "legacy_id": 1042, 
        "longitude": 18.5574816175338, 
        "name": "Cik\u00f3"
      }, 
      {
        "id": "005332326", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1061, 
        "longitude": null, 
        "name": "Ciucea"
      }, 
      {
        "id": "005332015", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1069, 
        "longitude": null, 
        "name": "Cluj Napoca"
      }, 
      {
        "id": "005320050", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1075, 
        "longitude": null, 
        "name": "Codlea"
      }, 
      {
        "id": "005310770", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1125, 
        "longitude": null, 
        "name": "Craiova"
      }, 
      {
        "id": "005518267", 
        "is_domestic": true, 
        "latitude": 46.8228604370932, 
        "legacy_id": 1150, 
        "longitude": 20.6635907949476, 
        "name": "Csabacs\u0171d"
      }, 
      {
        "id": "005544412", 
        "is_domestic": true, 
        "latitude": 46.8290315360684, 
        "legacy_id": 1151, 
        "longitude": 20.64941693281, 
        "name": "Csabacs\u0171d fels\u0151"
      }, 
      {
        "id": "005504317", 
        "is_domestic": true, 
        "latitude": 47.0337020973828, 
        "legacy_id": 1153, 
        "longitude": 18.1862886510015, 
        "name": "Csaj\u00e1g"
      }, 
      {
        "id": "004302295", 
        "is_domestic": true, 
        "latitude": 46.9785164369494, 
        "legacy_id": 1154, 
        "longitude": 16.5005266514542, 
        "name": "Cs\u00e1k\u00e1nydoroszl\u00f3"
      }, 
      {
        "id": "005519158", 
        "is_domestic": true, 
        "latitude": 46.2360385339946, 
        "legacy_id": 1156, 
        "longitude": 20.7324919401438, 
        "name": "Csan\u00e1dpalota"
      }, 
      {
        "id": "004302428", 
        "is_domestic": true, 
        "latitude": 47.430519266809, 
        "legacy_id": 1157, 
        "longitude": 17.0262357418243, 
        "name": "Cs\u00e1nig"
      }, 
      {
        "id": "002238010_86", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1159, 
        "longitude": null, 
        "name": "Csap (Chop)"
      }, 
      {
        "id": "005513920_87", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1160, 
        "longitude": null, 
        "name": "Csap\u00f3kert (Debrecen-Csap\u00f3kert)"
      }, 
      {
        "id": "005517871", 
        "is_domestic": true, 
        "latitude": 46.8621020374878, 
        "legacy_id": 1161, 
        "longitude": 20.9306398507894, 
        "name": "Cs\u00e1rdasz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005517152", 
        "is_domestic": true, 
        "latitude": 46.5383571596681, 
        "legacy_id": 1164, 
        "longitude": 19.9088626522683, 
        "name": "Csengele"
      }, 
      {
        "id": "005515578", 
        "is_domestic": true, 
        "latitude": 47.8262455527412, 
        "legacy_id": 1165, 
        "longitude": 22.6664014290286, 
        "name": "Csenger"
      }, 
      {
        "id": "005516253", 
        "is_domestic": true, 
        "latitude": 46.7174627372343, 
        "legacy_id": 1166, 
        "longitude": 19.2741125589562, 
        "name": "Cseng\u0151d"
      }, 
      {
        "id": "005517384", 
        "is_domestic": true, 
        "latitude": 46.812291115713, 
        "legacy_id": 1167, 
        "longitude": 20.1346792599234, 
        "name": "Cs\u00e9pa"
      }, 
      {
        "id": "005507252", 
        "is_domestic": true, 
        "latitude": 46.0857065151509, 
        "legacy_id": 1168, 
        "longitude": 17.987530575044, 
        "name": "Cserdi-Helesfa"
      }, 
      {
        "id": "005507286_88", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1169, 
        "longitude": null, 
        "name": "Cserk\u00fat (Mecsekalja-Cserk\u00fat)"
      }, 
      {
        "id": "004302634_89", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1170, 
        "longitude": null, 
        "name": "Csermajor (Vitny\u00e9d-Csermajor)"
      }, 
      {
        "id": "005513714_90", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1171, 
        "longitude": null, 
        "name": "Cser\u0151 (Cegl\u00e9dbercel-Cser\u0151)"
      }, 
      {
        "id": "005502980_91", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1172, 
        "longitude": null, 
        "name": "Csesznek (Porva-Csesznek)"
      }, 
      {
        "id": "005506155", 
        "is_domestic": true, 
        "latitude": 46.4660082587659, 
        "legacy_id": 1173, 
        "longitude": 18.3351090539693, 
        "name": "Csibr\u00e1k"
      }, 
      {
        "id": "005507013", 
        "is_domestic": true, 
        "latitude": 46.3371092451947, 
        "legacy_id": 1174, 
        "longitude": 18.1526098719014, 
        "name": "Csik\u00f3st\u0151tt\u0151s"
      }, 
      {
        "id": "005340490_92", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1175, 
        "longitude": null, 
        "name": "Cs\u00edkszentdomokos (Izvoru Oltului)"
      }, 
      {
        "id": "005340373_93", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1176, 
        "longitude": null, 
        "name": "Cs\u00edkszereda (Miercurea Ciuc)"
      }, 
      {
        "id": "005511346", 
        "is_domestic": true, 
        "latitude": 47.8904962465961, 
        "legacy_id": 1177, 
        "longitude": 20.7636139372701, 
        "name": "Csincse"
      }, 
      {
        "id": "005504333", 
        "is_domestic": true, 
        "latitude": 47.0251802549012, 
        "legacy_id": 339, 
        "longitude": 18.1375103536245, 
        "name": "Csitt\u00e9nyhegy"
      }, 
      {
        "id": "005513177", 
        "is_domestic": true, 
        "latitude": 48.277342952554, 
        "legacy_id": 1179, 
        "longitude": 21.0338882711491, 
        "name": "Csob\u00e1d"
      }, 
      {
        "id": "005503723", 
        "is_domestic": true, 
        "latitude": 47.3298297759895, 
        "legacy_id": 7378, 
        "longitude": 18.237533138988, 
        "name": "Cs\u00f3kak\u0151"
      }, 
      {
        "id": "005510553", 
        "is_domestic": true, 
        "latitude": 47.6356164461841, 
        "legacy_id": 1180, 
        "longitude": 19.2228366123086, 
        "name": "Csom\u00e1d"
      }, 
      {
        "id": "005506221", 
        "is_domestic": true, 
        "latitude": 46.3666037512756, 
        "legacy_id": 1181, 
        "longitude": 18.0449139931989, 
        "name": "Csoma-Szabadi"
      }, 
      {
        "id": "005517434", 
        "is_domestic": true, 
        "latitude": 46.7045488668709, 
        "legacy_id": 1182, 
        "longitude": 20.1401813805425, 
        "name": "Csongr\u00e1d"
      }, 
      {
        "id": "005544891", 
        "is_domestic": true, 
        "latitude": 46.711464904476, 
        "legacy_id": 1183, 
        "longitude": 20.1275473903589, 
        "name": "Csongr\u00e1d als\u00f3"
      }, 
      {
        "id": "005544875", 
        "is_domestic": true, 
        "latitude": 46.6901951298697, 
        "legacy_id": 1184, 
        "longitude": 19.9224127520709, 
        "name": "Csongr\u00e1di \u00fati tany\u00e1k"
      }, 
      {
        "id": "002238010_94", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1185, 
        "longitude": null, 
        "name": "Csop (Chop)"
      }, 
      {
        "id": "005504390", 
        "is_domestic": true, 
        "latitude": 46.9746553078037, 
        "legacy_id": 1186, 
        "longitude": 17.9311607062861, 
        "name": "Csopak"
      }, 
      {
        "id": "005502576", 
        "is_domestic": true, 
        "latitude": 47.6020235134894, 
        "legacy_id": 1189, 
        "longitude": 17.2490680392888, 
        "name": "Csorna"
      }, 
      {
        "id": "005518630", 
        "is_domestic": true, 
        "latitude": 46.6235562398229, 
        "legacy_id": 1190, 
        "longitude": 20.840882691314, 
        "name": "Csorv\u00e1s"
      }, 
      {
        "id": "005518648", 
        "is_domestic": true, 
        "latitude": 46.6352943699147, 
        "legacy_id": 1191, 
        "longitude": 20.8898613277525, 
        "name": "Csorv\u00e1s als\u00f3"
      }, 
      {
        "id": "005504960", 
        "is_domestic": true, 
        "latitude": 46.6079180250976, 
        "legacy_id": 1192, 
        "longitude": 16.6418389429363, 
        "name": "Cs\u00f6m\u00f6d\u00e9r-P\u00e1ka"
      }, 
      {
        "id": "005510843", 
        "is_domestic": true, 
        "latitude": 47.7359794326912, 
        "legacy_id": 1193, 
        "longitude": 19.1963420220847, 
        "name": "Cs\u00f6r\u00f6g"
      }, 
      {
        "id": "005332326_95", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1194, 
        "longitude": null, 
        "name": "Csucsa (Ciucea)"
      }, 
      {
        "id": "005517830", 
        "is_domestic": true, 
        "latitude": 47.0500680324307, 
        "legacy_id": 1195, 
        "longitude": 20.5412383648962, 
        "name": "Csugar"
      }, 
      {
        "id": "005506411", 
        "is_domestic": true, 
        "latitude": 46.2611116977137, 
        "legacy_id": 1196, 
        "longitude": 17.0919391076387, 
        "name": "Csurg\u00f3"
      }, 
      {
        "id": "005518721_96", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6744, 
        "longitude": null, 
        "name": "Cukorgy\u00e1r (Sarkadi Cukorgy\u00e1r)"
      }, 
      {
        "id": "007872403", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1142, 
        "longitude": null, 
        "name": "Culinec"
      }, 
      {
        "id": "005321925", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1145, 
        "longitude": null, 
        "name": "Curtici"
      }, 
      {
        "id": "005345232", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1146, 
        "longitude": null, 
        "name": "Curtuiuseni"
      }, 
      {
        "id": "005107600", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1148, 
        "longitude": null, 
        "name": "Czechowice Dziedzice"
      }, 
      {
        "id": "005516840", 
        "is_domestic": true, 
        "latitude": 47.1946459000314, 
        "legacy_id": 1197, 
        "longitude": 19.3293259108625, 
        "name": "Dabas"
      }, 
      {
        "id": "005504812", 
        "is_domestic": true, 
        "latitude": 47.0257433155641, 
        "legacy_id": 1200, 
        "longitude": 17.1669566772406, 
        "name": "Dabronc"
      }, 
      {
        "id": "005107458", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7932, 
        "longitude": null, 
        "name": "Dabrowa Gornicza"
      }, 
      {
        "id": "005501537_97", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6695, 
        "longitude": null, 
        "name": "D.alm\u00e1s (Dunaalm\u00e1s)"
      }, 
      {
        "id": "005505694", 
        "is_domestic": true, 
        "latitude": 45.9921320590262, 
        "legacy_id": 1213, 
        "longitude": 17.598229328024, 
        "name": "Dar\u00e1ny"
      }, 
      {
        "id": "005508367", 
        "is_domestic": true, 
        "latitude": 46.7665573386482, 
        "legacy_id": 1214, 
        "longitude": 18.1467765029689, 
        "name": "Dar\u00e1nypuszta"
      }, 
      {
        "id": "005513912", 
        "is_domestic": true, 
        "latitude": 47.5200096651574, 
        "legacy_id": 1227, 
        "longitude": 21.6275816393047, 
        "name": "Debrecen"
      }, 
      {
        "id": "005513920", 
        "is_domestic": true, 
        "latitude": 47.5405812686475, 
        "legacy_id": 1228, 
        "longitude": 21.6480453146486, 
        "name": "Debrecen-Csap\u00f3kert"
      }, 
      {
        "id": "005515131", 
        "is_domestic": true, 
        "latitude": 47.5257237147742, 
        "legacy_id": 1229, 
        "longitude": 21.7136986578911, 
        "name": "Debrecen-Kondoros"
      }, 
      {
        "id": "005515123", 
        "is_domestic": true, 
        "latitude": 47.5277781875118, 
        "legacy_id": 1230, 
        "longitude": 21.6586863419988, 
        "name": "Debrecen-Szabads\u00e1gtelep"
      }, 
      {
        "id": "005455659", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1233, 
        "longitude": null, 
        "name": "Decin hl. n."
      }, 
      {
        "id": "005506783", 
        "is_domestic": true, 
        "latitude": 46.2838395756669, 
        "legacy_id": 1234, 
        "longitude": 18.7560592576182, 
        "name": "Decs"
      }, 
      {
        "id": "005340830", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1235, 
        "longitude": null, 
        "name": "Deda"
      }, 
      {
        "id": "005340830_98", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1236, 
        "longitude": null, 
        "name": "D\u00e9da (Deda)"
      }, 
      {
        "id": "005341195", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6804, 
        "longitude": null, 
        "name": "Dej C\u0103l\u0103tori"
      }, 
      {
        "id": "005510710", 
        "is_domestic": true, 
        "latitude": 48.0455162485798, 
        "legacy_id": 1242, 
        "longitude": 19.1964072275294, 
        "name": "Dejt\u00e1r"
      }, 
      {
        "id": "005516162", 
        "is_domestic": true, 
        "latitude": 47.2535038460374, 
        "legacy_id": 1243, 
        "longitude": 19.0610120738331, 
        "name": "D\u00e9legyh\u00e1za"
      }, 
      {
        "id": "005501016_99", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7453, 
        "longitude": null, 
        "name": "D\u00e9li (Budapest) (Budapest-D\u00e9li)"
      }, 
      {
        "id": "005503814_100", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7458, 
        "longitude": null, 
        "name": "D\u00e9li (Sz\u0151ny) (Sz\u0151ny-D\u00e9li)"
      }, 
      {
        "id": "005514076", 
        "is_domestic": true, 
        "latitude": 48.1116560931626, 
        "legacy_id": 1250, 
        "longitude": 21.9267251417907, 
        "name": "Demecser"
      }, 
      {
        "id": "004302410", 
        "is_domestic": true, 
        "latitude": 47.4487049193285, 
        "legacy_id": 1253, 
        "longitude": 17.0549080970046, 
        "name": "D\u00e9nesfa"
      }, 
      {
        "id": "005514951", 
        "is_domestic": true, 
        "latitude": 47.3640949315424, 
        "legacy_id": 1256, 
        "longitude": 21.5833423866959, 
        "name": "Derecske"
      }, 
      {
        "id": "005514969", 
        "is_domestic": true, 
        "latitude": 47.3515784256025, 
        "legacy_id": 1257, 
        "longitude": 21.580864986043, 
        "name": "Derecske-V\u00e1s\u00e1rt\u00e9r"
      }, 
      {
        "id": "005341195_101", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6738, 
        "longitude": null, 
        "name": "D\u00e9s (Dej C\u0103l\u0103tori)"
      }, 
      {
        "id": "005518960", 
        "is_domestic": true, 
        "latitude": 46.2100058608911, 
        "legacy_id": 1263, 
        "longitude": 20.2459265655172, 
        "name": "Deszk"
      }, 
      {
        "id": "008103282", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1268, 
        "longitude": null, 
        "name": "Deutschkreutz"
      }, 
      {
        "id": "005321286", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1269, 
        "longitude": null, 
        "name": "Deva"
      }, 
      {
        "id": "005321286_102", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1270, 
        "longitude": null, 
        "name": "D\u00e9va (Deva)"
      }, 
      {
        "id": "005518424", 
        "is_domestic": true, 
        "latitude": 47.0339086488407, 
        "legacy_id": 1271, 
        "longitude": 20.9434921503954, 
        "name": "D\u00e9vav\u00e1nya"
      }, 
      {
        "id": "005504044", 
        "is_domestic": true, 
        "latitude": 47.1121608029443, 
        "legacy_id": 1272, 
        "longitude": 17.4357566329332, 
        "name": "Devecser"
      }, 
      {
        "id": "005516121_103", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6633, 
        "longitude": null, 
        "name": "D.haraszti (Dunaharaszti)"
      }, 
      {
        "id": "005542325_104", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6660, 
        "longitude": null, 
        "name": "D.haraszti als\u00f3 (Dunaharaszti als\u00f3)"
      }, 
      {
        "id": "005503103", 
        "is_domestic": true, 
        "latitude": 47.1808315775908, 
        "legacy_id": 1287, 
        "longitude": 18.5639310111404, 
        "name": "Dinny\u00e9s"
      }, 
      {
        "id": "005345048", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1289, 
        "longitude": null, 
        "name": "Diosig"
      }, 
      {
        "id": "005510645", 
        "is_domestic": true, 
        "latitude": 47.9400285633628, 
        "legacy_id": 1290, 
        "longitude": 19.0495379510813, 
        "name": "Di\u00f3sjen\u0151"
      }, 
      {
        "id": "005345048_105", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Di\u00f3szeg (Diosig)"
      }, 
      {
        "id": "005510371_106", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6777, 
        "longitude": null, 
        "name": "D.keszi (Dunakeszi)"
      }, 
      {
        "id": "005540758_107", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6769, 
        "longitude": null, 
        "name": "D.keszi als\u00f3 (Dunakeszi als\u00f3)"
      }, 
      {
        "id": "005345359", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1335, 
        "longitude": null, 
        "name": "Domanesti"
      }, 
      {
        "id": "005515339", 
        "is_domestic": true, 
        "latitude": 47.6027582168125, 
        "legacy_id": 1337, 
        "longitude": 21.7063960086489, 
        "name": "Dombostanya"
      }, 
      {
        "id": "005506189", 
        "is_domestic": true, 
        "latitude": 46.3702522374874, 
        "legacy_id": 1338, 
        "longitude": 18.1496025225156, 
        "name": "Domb\u00f3v\u00e1r"
      }, 
      {
        "id": "005506197", 
        "is_domestic": true, 
        "latitude": 46.3637515107121, 
        "legacy_id": 1339, 
        "longitude": 18.1342756371497, 
        "name": "Domb\u00f3v\u00e1r als\u00f3"
      }, 
      {
        "id": "005510801_108", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1343, 
        "longitude": null, 
        "name": "Domony (Iklad-Domony)"
      }, 
      {
        "id": "005510819_109", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1344, 
        "longitude": null, 
        "name": "Domony fels\u0151 (Iklad-Domony fels\u0151)"
      }, 
      {
        "id": "005544925", 
        "is_domestic": true, 
        "latitude": 46.6698242607944, 
        "legacy_id": 1346, 
        "longitude": 20.3680952403544, 
        "name": "Don\u00e1t"
      }, 
      {
        "id": "005501495", 
        "is_domestic": true, 
        "latitude": 47.7235354491039, 
        "legacy_id": 1364, 
        "longitude": 18.7325494089389, 
        "name": "Dorog"
      }, 
      {
        "id": "005506171", 
        "is_domestic": true, 
        "latitude": 46.4163270239646, 
        "legacy_id": 1368, 
        "longitude": 18.2528702665099, 
        "name": "D\u00f6br\u00f6k\u00f6z"
      }, 
      {
        "id": "005540857", 
        "is_domestic": true, 
        "latitude": 47.7700793676928, 
        "legacy_id": 1370, 
        "longitude": 18.9180111176339, 
        "name": "D\u00f6m\u00f6si \u00e1tkel\u00e9s"
      }, 
      {
        "id": "005516196", 
        "is_domestic": true, 
        "latitude": 47.1104173355998, 
        "legacy_id": 1371, 
        "longitude": 19.0795697686999, 
        "name": "D\u00f6ms\u00f6d"
      }, 
      {
        "id": "005504465_110", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1372, 
        "longitude": null, 
        "name": "D\u00f6rgicse (Balatonakali-D\u00f6rgicse)"
      }, 
      {
        "id": "004333215", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 8499, 
        "longitude": null, 
        "name": "DRASSBURG"
      }, 
      {
        "id": "005510686", 
        "is_domestic": true, 
        "latitude": 48.042433510376, 
        "legacy_id": 1386, 
        "longitude": 19.0569644341452, 
        "name": "Dr\u00e9gely"
      }, 
      {
        "id": "005510694", 
        "is_domestic": true, 
        "latitude": 48.0547191342475, 
        "legacy_id": 1387, 
        "longitude": 19.046811604577, 
        "name": "Dr\u00e9gelypal\u00e1nk"
      }, 
      {
        "id": "005510678", 
        "is_domestic": true, 
        "latitude": 48.002062909738, 
        "legacy_id": 1388, 
        "longitude": 19.079633700548, 
        "name": "Dr\u00e9gelyv\u00e1r"
      }, 
      {
        "id": "008006050", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1391, 
        "longitude": null, 
        "name": "Dresden Hbf"
      }, 
      {
        "id": "008006216", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1392, 
        "longitude": null, 
        "name": "Dresden-Neustadt"
      }, 
      {
        "id": "008006050_111", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1393, 
        "longitude": null, 
        "name": "Drezda (Dresden Hbf)"
      }, 
      {
        "id": "005311140", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1401, 
        "longitude": null, 
        "name": "Drobeta Tr.Severin"
      }, 
      {
        "id": "005512815", 
        "is_domestic": true, 
        "latitude": 48.280647254985, 
        "legacy_id": 1408, 
        "longitude": 20.5047207425303, 
        "name": "Dubics\u00e1ny"
      }, 
      {
        "id": "007872517", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1417, 
        "longitude": null, 
        "name": "Dugo Selo"
      }, 
      {
        "id": "005506502_112", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6767, 
        "longitude": null, 
        "name": "D.\u00fajv\u00e1ros (Duna\u00fajv\u00e1ros)"
      }, 
      {
        "id": "005506494_113", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6712, 
        "longitude": null, 
        "name": "D.\u00fajv\u00e1ros k\u00fcls\u0151 (Duna\u00fajv\u00e1ros k\u00fcls\u0151)"
      }, 
      {
        "id": "005501537", 
        "is_domestic": true, 
        "latitude": 47.7329999374912, 
        "legacy_id": 1424, 
        "longitude": 18.3263865976229, 
        "name": "Dunaalm\u00e1s"
      }, 
      {
        "id": "005507161_114", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6820, 
        "longitude": null, 
        "name": "Dunaf\u00fcrd\u0151 (Baja-Dunaf\u00fcrd\u0151)"
      }, 
      {
        "id": "005516121", 
        "is_domestic": true, 
        "latitude": 47.3527384699692, 
        "legacy_id": 1425, 
        "longitude": 19.0964245476094, 
        "name": "Dunaharaszti"
      }, 
      {
        "id": "005542325", 
        "is_domestic": true, 
        "latitude": 47.3401991611568, 
        "legacy_id": 1426, 
        "longitude": 19.0872990276681, 
        "name": "Dunaharaszti als\u00f3"
      }, 
      {
        "id": "005505843", 
        "is_domestic": true, 
        "latitude": 47.2943762209903, 
        "legacy_id": 1427, 
        "longitude": 18.8787244942528, 
        "name": "Dunai Finom\u00edt\u00f3"
      }, 
      {
        "id": "005510371", 
        "is_domestic": true, 
        "latitude": 47.6257973650079, 
        "legacy_id": 1429, 
        "longitude": 19.1364718242725, 
        "name": "Dunakeszi"
      }, 
      {
        "id": "005540758", 
        "is_domestic": true, 
        "latitude": 47.6076820190807, 
        "legacy_id": 1430, 
        "longitude": 19.1288259374953, 
        "name": "Dunakeszi als\u00f3"
      }, 
      {
        "id": "005510397", 
        "is_domestic": true, 
        "latitude": 47.6437945795886, 
        "legacy_id": 1431, 
        "longitude": 19.134974054153, 
        "name": "Dunakeszi-Gy\u00e1rtelep"
      }, 
      {
        "id": "005506502", 
        "is_domestic": true, 
        "latitude": 46.960770166712, 
        "legacy_id": 1433, 
        "longitude": 18.9137424432555, 
        "name": "Duna\u00fajv\u00e1ros"
      }, 
      {
        "id": "005506494", 
        "is_domestic": true, 
        "latitude": 46.9825377521438, 
        "legacy_id": 1434, 
        "longitude": 18.9036063230889, 
        "name": "Duna\u00fajv\u00e1ros k\u00fcls\u0151"
      }, 
      {
        "id": "005516154", 
        "is_domestic": true, 
        "latitude": 47.2744783555068, 
        "legacy_id": 1435, 
        "longitude": 19.0650082177117, 
        "name": "Dunavars\u00e1ny"
      }, 
      {
        "id": "005506148", 
        "is_domestic": true, 
        "latitude": 46.4940050509538, 
        "legacy_id": 1442, 
        "longitude": 18.3773746687297, 
        "name": "D\u00fazs"
      }, 
      {
        "id": "005516154_115", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6745, 
        "longitude": null, 
        "name": "D.vars\u00e1ny (Dunavars\u00e1ny)"
      }, 
      {
        "id": "008103199", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1451, 
        "longitude": null, 
        "name": "Ebenfurth"
      }, 
      {
        "id": "005513896", 
        "is_domestic": true, 
        "latitude": 47.4625160624778, 
        "legacy_id": 1456, 
        "longitude": 21.4887523547507, 
        "name": "Ebes"
      }, 
      {
        "id": "008103195", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1457, 
        "longitude": null, 
        "name": "Ebreichsdorf"
      }, 
      {
        "id": "005511544", 
        "is_domestic": true, 
        "latitude": 47.4405693745772, 
        "legacy_id": 1459, 
        "longitude": 19.3149335784426, 
        "name": "Ecser"
      }, 
      {
        "id": "005512948", 
        "is_domestic": true, 
        "latitude": 48.2996819429876, 
        "legacy_id": 1460, 
        "longitude": 20.7493534739598, 
        "name": "Edel\u00e9ny"
      }, 
      {
        "id": "005512930", 
        "is_domestic": true, 
        "latitude": 48.2784753683841, 
        "legacy_id": 1461, 
        "longitude": 20.7610095546022, 
        "name": "Edel\u00e9ny als\u00f3"
      }, 
      {
        "id": "005504804_116", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1462, 
        "longitude": null, 
        "name": "Ederics (Balatonederics)"
      }, 
      {
        "id": "005512401", 
        "is_domestic": true, 
        "latitude": 47.8915284186486, 
        "legacy_id": 1471, 
        "longitude": 20.3817154826947, 
        "name": "Eger"
      }, 
      {
        "id": "005332182_117", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1472, 
        "longitude": null, 
        "name": "Egeres (Aghires)"
      }, 
      {
        "id": "005514597", 
        "is_domestic": true, 
        "latitude": 47.7115661083925, 
        "legacy_id": 1473, 
        "longitude": 20.5225336518449, 
        "name": "Egerfarmos"
      }, 
      {
        "id": "005512435", 
        "is_domestic": true, 
        "latitude": 47.9365761248689, 
        "legacy_id": 1474, 
        "longitude": 20.3705820683647, 
        "name": "Eger-Feln\u00e9met"
      }, 
      {
        "id": "005512427", 
        "is_domestic": true, 
        "latitude": 47.9075432156188, 
        "legacy_id": 1475, 
        "longitude": 20.3807437170958, 
        "name": "Egerv\u00e1r"
      }, 
      {
        "id": "004305355", 
        "is_domestic": true, 
        "latitude": 46.9418727411856, 
        "legacy_id": 1476, 
        "longitude": 16.8624608677255, 
        "name": "Egerv\u00e1r-Vasboldogasszony"
      }, 
      {
        "id": "005503087", 
        "is_domestic": true, 
        "latitude": 47.5220840020857, 
        "legacy_id": 1479, 
        "longitude": 17.3166424564138, 
        "name": "Egyed-R\u00e1bacsanak"
      }, 
      {
        "id": "005514555", 
        "is_domestic": true, 
        "latitude": 47.6167455199482, 
        "legacy_id": 1480, 
        "longitude": 20.883735573066, 
        "name": "Egyek"
      }, 
      {
        "id": "004302279", 
        "is_domestic": true, 
        "latitude": 47.0908566670159, 
        "legacy_id": 1481, 
        "longitude": 16.6198385070535, 
        "name": "Egyh\u00e1zasr\u00e1d\u00f3c"
      }, 
      {
        "id": "005514746", 
        "is_domestic": true, 
        "latitude": 47.9724760604108, 
        "legacy_id": 1482, 
        "longitude": 21.3650261234717, 
        "name": "Egyh\u00e1zerd\u0151"
      }, 
      {
        "id": "005332508_118", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1493, 
        "longitude": null, 
        "name": "\u00c9lesd (Alesd)"
      }, 
      {
        "id": "005544990", 
        "is_domestic": true, 
        "latitude": 47.363441656431, 
        "legacy_id": 1497, 
        "longitude": 20.6540903051937, 
        "name": "El\u0151h\u00e1t"
      }, 
      {
        "id": "005511353", 
        "is_domestic": true, 
        "latitude": 47.9308974388105, 
        "legacy_id": 1507, 
        "longitude": 20.8224694440481, 
        "name": "Em\u0151d"
      }, 
      {
        "id": "005513193_119", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1508, 
        "longitude": null, 
        "name": "Encs (Forr\u00f3-Encs)"
      }, 
      {
        "id": "004302535", 
        "is_domestic": true, 
        "latitude": 47.6441610924294, 
        "legacy_id": 1509, 
        "longitude": 17.4254245226357, 
        "name": "Enese"
      }, 
      {
        "id": "005515867", 
        "is_domestic": true, 
        "latitude": 48.3597755449989, 
        "legacy_id": 1516, 
        "longitude": 22.1897924043931, 
        "name": "Eperjeske als\u00f3"
      }, 
      {
        "id": "005332742", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1518, 
        "longitude": null, 
        "name": "Episcopia Bihor"
      }, 
      {
        "id": "005503038", 
        "is_domestic": true, 
        "latitude": 47.1927228978844, 
        "legacy_id": 1519, 
        "longitude": 17.921768427994, 
        "name": "Epl\u00e9ny"
      }, 
      {
        "id": "005505850", 
        "is_domestic": true, 
        "latitude": 47.2470155275661, 
        "legacy_id": 1520, 
        "longitude": 18.8757614985687, 
        "name": "Ercsi"
      }, 
      {
        "id": "005505827", 
        "is_domestic": true, 
        "latitude": 47.3699152326562, 
        "legacy_id": 1522, 
        "longitude": 18.90115533286, 
        "name": "\u00c9rd"
      }, 
      {
        "id": "005503152", 
        "is_domestic": true, 
        "latitude": 47.3797527781386, 
        "legacy_id": 1523, 
        "longitude": 18.9236860076808, 
        "name": "\u00c9rd als\u00f3"
      }, 
      {
        "id": "005500017", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1521, 
        "longitude": null, 
        "name": "\u00c9RD* (\u00c9rd als\u00f3, \u00c9rd fels\u0151)"
      }, 
      {
        "id": "005505819", 
        "is_domestic": true, 
        "latitude": 47.3811155171454, 
        "legacy_id": 1524, 
        "longitude": 18.9228213700557, 
        "name": "\u00c9rd fels\u0151"
      }, 
      {
        "id": "005505801", 
        "is_domestic": true, 
        "latitude": 47.3903959066304, 
        "legacy_id": 1525, 
        "longitude": 18.9380708940314, 
        "name": "\u00c9rdliget"
      }, 
      {
        "id": "005513433", 
        "is_domestic": true, 
        "latitude": 48.2181213881008, 
        "legacy_id": 1526, 
        "longitude": 21.4018389096497, 
        "name": "Erd\u0151b\u00e9nye"
      }, 
      {
        "id": "005510579", 
        "is_domestic": true, 
        "latitude": 47.6622124485664, 
        "legacy_id": 1527, 
        "longitude": 19.2959295823431, 
        "name": "Erd\u0151kertes"
      }, 
      {
        "id": "005510884_120", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1528, 
        "longitude": null, 
        "name": "Erd\u0151k\u00fcrt (Acsa-Erd\u0151k\u00fcrt)"
      }, 
      {
        "id": "005516592", 
        "is_domestic": true, 
        "latitude": 46.3293967356844, 
        "legacy_id": 1529, 
        "longitude": 19.3947617550284, 
        "name": "Erd\u0151sz\u00e9l"
      }, 
      {
        "id": "005512260", 
        "is_domestic": true, 
        "latitude": 47.6832142335648, 
        "legacy_id": 1530, 
        "longitude": 20.3025584441984, 
        "name": "Erd\u0151telek"
      }, 
      {
        "id": "005345153_121", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7594, 
        "longitude": null, 
        "name": "\u00c9rmih\u00e1lyfalva (Valea lui Mihai)"
      }, 
      {
        "id": "005511734_122", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7449, 
        "longitude": null, 
        "name": "Er\u0151m\u0171 (M\u00e1travid\u00e9ki) (M\u00e1travid\u00e9ki Er\u0151m\u0171)"
      }, 
      {
        "id": "005613436_123", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6749, 
        "longitude": null, 
        "name": "\u00c9rsek\u00fajv\u00e1r (Nov\u00e9 Z\u00e1mky)"
      }, 
      {
        "id": "005345103_124", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1539, 
        "longitude": null, 
        "name": "\u00c9rsel\u00e9nd (Silindru)"
      }, 
      {
        "id": "005515024_125", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1548, 
        "longitude": null, 
        "name": "Eszt\u00e1r (Pocsaj-Eszt\u00e1r)"
      }, 
      {
        "id": "005501511", 
        "is_domestic": true, 
        "latitude": 47.7779119534741, 
        "legacy_id": 1549, 
        "longitude": 18.7434555633048, 
        "name": "Esztergom"
      }, 
      {
        "id": "005501503", 
        "is_domestic": true, 
        "latitude": 47.7428472853069, 
        "legacy_id": 1550, 
        "longitude": 18.7178192544169, 
        "name": "Esztergom-Kertv\u00e1ros"
      }, 
      {
        "id": "005501586", 
        "is_domestic": true, 
        "latitude": 47.7555537457724, 
        "legacy_id": 1551, 
        "longitude": 18.529897233299, 
        "name": "Eternitgy\u00e1r"
      }, 
      {
        "id": "005517467", 
        "is_domestic": true, 
        "latitude": 46.6701337629462, 
        "legacy_id": 1561, 
        "longitude": 20.4565675119145, 
        "name": "F\u00e1bi\u00e1nsebesty\u00e9n"
      }, 
      {
        "id": "005506734", 
        "is_domestic": true, 
        "latitude": 46.4488323266804, 
        "legacy_id": 1562, 
        "longitude": 18.735495056247, 
        "name": "F\u00e1c\u00e1nkert"
      }, 
      {
        "id": "005320232", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1563, 
        "longitude": null, 
        "name": "Fagaras"
      }, 
      {
        "id": "004302584", 
        "is_domestic": true, 
        "latitude": 47.595988, 
        "legacy_id": 1569, 
        "longitude": 17.196105, 
        "name": "Far\u00e1d"
      }, 
      {
        "id": "005511668", 
        "is_domestic": true, 
        "latitude": 47.3553699201213, 
        "legacy_id": 1573, 
        "longitude": 19.8375769377738, 
        "name": "Farmos"
      }, 
      {
        "id": "005513805", 
        "is_domestic": true, 
        "latitude": 47.1945069748473, 
        "legacy_id": 1575, 
        "longitude": 20.55766508026, 
        "name": "Fegyvernek-\u00d6rm\u00e9nyes"
      }, 
      {
        "id": "005515768", 
        "is_domestic": true, 
        "latitude": 47.978829327164, 
        "legacy_id": 1576, 
        "longitude": 22.5241282848893, 
        "name": "Feh\u00e9rgyarmat"
      }, 
      {
        "id": "008103505", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1578, 
        "longitude": null, 
        "name": "Fehring"
      }, 
      {
        "id": "005320050_126", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Feketehalom (Codlea)"
      }, 
      {
        "id": "008103503", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1581, 
        "longitude": null, 
        "name": "Feldbach"
      }, 
      {
        "id": "008101236", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1584, 
        "longitude": null, 
        "name": "Feldkirch"
      }, 
      {
        "id": "005512435_127", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1593, 
        "longitude": null, 
        "name": "Feln\u00e9met (Eger-Feln\u00e9met)"
      }, 
      {
        "id": "005510421", 
        "is_domestic": true, 
        "latitude": 47.7055796164947, 
        "legacy_id": 1595, 
        "longitude": 19.1432969144365, 
        "name": "Fels\u0151g\u00f6d"
      }, 
      {
        "id": "005505041", 
        "is_domestic": true, 
        "latitude": 46.8415113769334, 
        "legacy_id": 1596, 
        "longitude": 16.5435275034222, 
        "name": "Fels\u0151j\u00e1nosfa"
      }, 
      {
        "id": "005516899", 
        "is_domestic": true, 
        "latitude": 47.06877310909, 
        "legacy_id": 1597, 
        "longitude": 19.4983508093819, 
        "name": "Fels\u0151lajos"
      }, 
      {
        "id": "005544669", 
        "is_domestic": true, 
        "latitude": 46.987095518035, 
        "legacy_id": 1598, 
        "longitude": 19.5577375009387, 
        "name": "Fels\u0151m\u00e9ntelek"
      }, 
      {
        "id": "005508276", 
        "is_domestic": true, 
        "latitude": 46.5606341418828, 
        "legacy_id": 1599, 
        "longitude": 17.8214867897766, 
        "name": "Fels\u0151mocsol\u00e1d"
      }, 
      {
        "id": "005544644", 
        "is_domestic": true, 
        "latitude": 47.3437770839328, 
        "legacy_id": 1600, 
        "longitude": 19.2306414311276, 
        "name": "Fels\u0151pakony"
      }, 
      {
        "id": "005505439", 
        "is_domestic": true, 
        "latitude": 46.6670679959195, 
        "legacy_id": 1601, 
        "longitude": 16.9829912835009, 
        "name": "Fels\u0151rajk"
      }, 
      {
        "id": "005511395", 
        "is_domestic": true, 
        "latitude": 48.0835021235695, 
        "legacy_id": 1604, 
        "longitude": 20.8661280106004, 
        "name": "Fels\u0151zsolca"
      }, 
      {
        "id": "005504739", 
        "is_domestic": true, 
        "latitude": 46.7117661811569, 
        "legacy_id": 1605, 
        "longitude": 17.2485939356699, 
        "name": "Fen\u00e9kpuszta"
      }, 
      {
        "id": "005518671", 
        "is_domestic": true, 
        "latitude": 46.6598938484031, 
        "legacy_id": 1607, 
        "longitude": 21.1656720433787, 
        "name": "F\u00e9nyes"
      }, 
      {
        "id": "005514134", 
        "is_domestic": true, 
        "latitude": 48.2672364288199, 
        "legacy_id": 1608, 
        "longitude": 22.1070582793655, 
        "name": "F\u00e9nyeslitke"
      }, 
      {
        "id": "005503525_128", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1609, 
        "longitude": null, 
        "name": "Fenyves (Balatonfenyves)"
      }, 
      {
        "id": "005503483_129", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1610, 
        "longitude": null, 
        "name": "Fenyves als\u00f3 (Balatonfenyves als\u00f3)"
      }, 
      {
        "id": "005546409", 
        "is_domestic": true, 
        "latitude": 47.8181511293859, 
        "legacy_id": 1611, 
        "longitude": 19.0682363081779, 
        "name": "Fenyveshegy"
      }, 
      {
        "id": "005510025", 
        "is_domestic": true, 
        "latitude": 47.468642889377, 
        "legacy_id": 1612, 
        "longitude": 19.0879383160883, 
        "name": "Ferencv\u00e1ros"
      }, 
      {
        "id": "005513615", 
        "is_domestic": true, 
        "latitude": 47.4372159329539, 
        "legacy_id": 1613, 
        "longitude": 19.2239204324028, 
        "name": "Ferihegy"
      }, 
      {
        "id": "004302709", 
        "is_domestic": true, 
        "latitude": 47.6265169194866, 
        "legacy_id": 1616, 
        "longitude": 16.6888238369143, 
        "name": "Fert\u0151boz"
      }, 
      {
        "id": "004302857_130", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6653, 
        "longitude": null, 
        "name": "Fert\u0151d (Fert\u0151sz\u00e9plak-Fert\u0151d)"
      }, 
      {
        "id": "004302667", 
        "is_domestic": true, 
        "latitude": 47.5997638132008, 
        "legacy_id": 1619, 
        "longitude": 16.8586315194811, 
        "name": "Fert\u0151szentmikl\u00f3s"
      }, 
      {
        "id": "004302857", 
        "is_domestic": true, 
        "latitude": 47.6178669146863, 
        "legacy_id": 1620, 
        "longitude": 16.8510299025042, 
        "name": "Fert\u0151sz\u00e9plak-Fert\u0151d"
      }, 
      {
        "id": "005310902", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1631, 
        "longitude": null, 
        "name": "Filiasi"
      }, 
      {
        "id": "005503632", 
        "is_domestic": true, 
        "latitude": 46.379097824601, 
        "legacy_id": 1641, 
        "longitude": 16.9215812378833, 
        "name": "Fityeh\u00e1z"
      }, 
      {
        "id": "005320232_131", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1656, 
        "longitude": null, 
        "name": "Fogaras (Fagaras)"
      }, 
      {
        "id": "005513359", 
        "is_domestic": true, 
        "latitude": 48.4106639251201, 
        "legacy_id": 1658, 
        "longitude": 21.2423769616446, 
        "name": "Fony"
      }, 
      {
        "id": "005503491", 
        "is_domestic": true, 
        "latitude": 46.7495796309432, 
        "legacy_id": 1659, 
        "longitude": 17.5567343511288, 
        "name": "Fony\u00f3d"
      }, 
      {
        "id": "005503467", 
        "is_domestic": true, 
        "latitude": 46.7592289740067, 
        "legacy_id": 1660, 
        "longitude": 17.5923785774689, 
        "name": "Fony\u00f3dliget"
      }, 
      {
        "id": "005513193", 
        "is_domestic": true, 
        "latitude": 48.3274219532012, 
        "legacy_id": 1662, 
        "longitude": 21.1178489884545, 
        "name": "Forr\u00f3-Encs"
      }, 
      {
        "id": "005510538", 
        "is_domestic": true, 
        "latitude": 47.6113216799594, 
        "legacy_id": 1666, 
        "longitude": 19.1816720414424, 
        "name": "F\u00f3t"
      }, 
      {
        "id": "005546391", 
        "is_domestic": true, 
        "latitude": 47.6222705791679, 
        "legacy_id": 1667, 
        "longitude": 19.2006181695698, 
        "name": "F\u00f3tf\u00fcrd\u0151"
      }, 
      {
        "id": "005510546", 
        "is_domestic": true, 
        "latitude": 47.6149741085374, 
        "legacy_id": 1668, 
        "longitude": 19.1927695445484, 
        "name": "F\u00f3t\u00fajfalu"
      }, 
      {
        "id": "005547308_132", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1670, 
        "longitude": null, 
        "name": "F\u0151kaj\u00e1r fels\u0151 (Balatonf\u0151kaj\u00e1r fels\u0151)"
      }, 
      {
        "id": "005504457", 
        "is_domestic": true, 
        "latitude": 46.8935846699782, 
        "legacy_id": 1671, 
        "longitude": 17.7894598714406, 
        "name": "F\u00f6venyes"
      }, 
      {
        "id": "008011068", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1680, 
        "longitude": null, 
        "name": "Frankfurt(Main)Hbf"
      }, 
      {
        "id": "008061676", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1678, 
        "longitude": null, 
        "name": "Frankfurt(M)-Flughafen Fernbf."
      }, 
      {
        "id": "008003171", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1683, 
        "longitude": null, 
        "name": "Frankfurt(Oder)"
      }, 
      {
        "id": "008133025", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1690, 
        "longitude": null, 
        "name": "Frauenkirchen"
      }, 
      {
        "id": "005504291", 
        "is_domestic": true, 
        "latitude": 47.0499272883064, 
        "legacy_id": 1717, 
        "longitude": 18.2553892235749, 
        "name": "F\u00fcle"
      }, 
      {
        "id": "005516238", 
        "is_domestic": true, 
        "latitude": 46.8207395320503, 
        "legacy_id": 1719, 
        "longitude": 19.246840852731, 
        "name": "F\u00fcl\u00f6psz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005518663", 
        "is_domestic": true, 
        "latitude": 46.6722630640785, 
        "legacy_id": 1720, 
        "longitude": 21.0234359537147, 
        "name": "F\u00fcrjes"
      }, 
      {
        "id": "005511296", 
        "is_domestic": true, 
        "latitude": 47.7512652669602, 
        "legacy_id": 1725, 
        "longitude": 20.4159941543061, 
        "name": "F\u00fczesabony"
      }, 
      {
        "id": "005543760", 
        "is_domestic": true, 
        "latitude": 47.9887044506262, 
        "legacy_id": 1726, 
        "longitude": 21.6478427380275, 
        "name": "F\u00fczesbokor"
      }, 
      {
        "id": "005514365", 
        "is_domestic": true, 
        "latitude": 47.1130582653291, 
        "legacy_id": 1727, 
        "longitude": 21.1944014096898, 
        "name": "F\u00fczesgyarmat"
      }, 
      {
        "id": "005514373", 
        "is_domestic": true, 
        "latitude": 47.0928604942168, 
        "legacy_id": 1728, 
        "longitude": 21.2017487453334, 
        "name": "F\u00fczesgyarmatf\u00fcrd\u0151"
      }, 
      {
        "id": "005504358_133", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1729, 
        "longitude": null, 
        "name": "F\u00fczf\u0151 (Balatonf\u0171zf\u0151)"
      }, 
      {
        "id": "005515818", 
        "is_domestic": true, 
        "latitude": 47.9263942620207, 
        "legacy_id": 1732, 
        "longitude": 22.7448631367702, 
        "name": "Gacs\u00e1ly"
      }, 
      {
        "id": "005517475", 
        "is_domestic": true, 
        "latitude": 46.6567266020303, 
        "legacy_id": 1733, 
        "longitude": 20.5882973681376, 
        "name": "G\u00e1doros"
      }, 
      {
        "id": "005516774", 
        "is_domestic": true, 
        "latitude": 46.6252009492835, 
        "legacy_id": 1743, 
        "longitude": 19.8010744814701, 
        "name": "Galambos"
      }, 
      {
        "id": "005510892", 
        "is_domestic": true, 
        "latitude": 47.846351247645, 
        "legacy_id": 1751, 
        "longitude": 19.3862905963999, 
        "name": "Galgaguta"
      }, 
      {
        "id": "005510868", 
        "is_domestic": true, 
        "latitude": 47.7353458493486, 
        "legacy_id": 1752, 
        "longitude": 19.3720088892414, 
        "name": "Galgagy\u00f6rk"
      }, 
      {
        "id": "005511189", 
        "is_domestic": true, 
        "latitude": 47.6323306675236, 
        "legacy_id": 1753, 
        "longitude": 19.5581983114056, 
        "name": "Galgah\u00e9v\u00edz"
      }, 
      {
        "id": "005510827", 
        "is_domestic": true, 
        "latitude": 47.6937501156449, 
        "legacy_id": 1754, 
        "longitude": 19.3924757851635, 
        "name": "Galgam\u00e1csa"
      }, 
      {
        "id": "004333022_134", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1758, 
        "longitude": null, 
        "name": "G\u00e1los (Gols)"
      }, 
      {
        "id": "005503236", 
        "is_domestic": true, 
        "latitude": 47.2060082426166, 
        "legacy_id": 1773, 
        "longitude": 18.6249289516937, 
        "name": "G\u00e1rdony"
      }, 
      {
        "id": "005517418", 
        "is_domestic": true, 
        "latitude": 46.6849594823896, 
        "legacy_id": 1782, 
        "longitude": 19.9622105382268, 
        "name": "G\u00e1t\u00e9r"
      }, 
      {
        "id": "008103004", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1783, 
        "longitude": null, 
        "name": "Gattendorf"
      }, 
      {
        "id": "005502105", 
        "is_domestic": true, 
        "latitude": 47.4560349492143, 
        "legacy_id": 1793, 
        "longitude": 17.5151440415883, 
        "name": "Gecse-Gyarmat"
      }, 
      {
        "id": "005514084", 
        "is_domestic": true, 
        "latitude": 48.1286699216027, 
        "legacy_id": 1795, 
        "longitude": 21.9524626000419, 
        "name": "G\u00e9g\u00e9ny"
      }, 
      {
        "id": "005505454", 
        "is_domestic": true, 
        "latitude": 46.6002039656766, 
        "legacy_id": 1803, 
        "longitude": 16.9828173799608, 
        "name": "Gelse"
      }, 
      {
        "id": "004305504", 
        "is_domestic": true, 
        "latitude": 47.2858300894713, 
        "legacy_id": 1809, 
        "longitude": 16.6001873129125, 
        "name": "Gencsap\u00e1ti als\u00f3"
      }, 
      {
        "id": "004345989", 
        "is_domestic": true, 
        "latitude": 47.2994351514467, 
        "legacy_id": 1810, 
        "longitude": 16.5937420469387, 
        "name": "Gencsap\u00e1ti fels\u0151"
      }, 
      {
        "id": "005345373", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1812, 
        "longitude": null, 
        "name": "General Gh. Avramescu"
      }, 
      {
        "id": "005340579", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7415, 
        "longitude": null, 
        "name": "Gheorgheni"
      }, 
      {
        "id": "005344094", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1825, 
        "longitude": null, 
        "name": "Gherla"
      }, 
      {
        "id": "008103497", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1843, 
        "longitude": null, 
        "name": "Gleisdorf"
      }, 
      {
        "id": "005104220", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Glogow"
      }, 
      {
        "id": "008103502", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1857, 
        "longitude": null, 
        "name": "Gniebing"
      }, 
      {
        "id": "005507211", 
        "is_domestic": true, 
        "latitude": 46.2233250693515, 
        "legacy_id": 1860, 
        "longitude": 18.1048757343623, 
        "name": "Godisa"
      }, 
      {
        "id": "005504671", 
        "is_domestic": true, 
        "latitude": 47.0211361926895, 
        "legacy_id": 1861, 
        "longitude": 17.2074804371207, 
        "name": "G\u00f3g\u00e1nfa"
      }, 
      {
        "id": "005513292", 
        "is_domestic": true, 
        "latitude": 48.2423916185058, 
        "legacy_id": 1868, 
        "longitude": 21.2047985667396, 
        "name": "Golop"
      }, 
      {
        "id": "004333022", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1869, 
        "longitude": null, 
        "name": "Gols"
      }, 
      {
        "id": "005510413", 
        "is_domestic": true, 
        "latitude": 47.6879847391486, 
        "legacy_id": 1886, 
        "longitude": 19.1374660107509, 
        "name": "G\u00f6d"
      }, 
      {
        "id": "005510405_135", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1887, 
        "longitude": null, 
        "name": "G\u00f6d als\u00f3 (Als\u00f3g\u00f6d)"
      }, 
      {
        "id": "005510421_136", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1888, 
        "longitude": null, 
        "name": "G\u00f6d fels\u0151 (Fels\u0151g\u00f6d)"
      }, 
      {
        "id": "005511130", 
        "is_domestic": true, 
        "latitude": 47.5921831537862, 
        "legacy_id": 1890, 
        "longitude": 19.358543757626, 
        "name": "G\u00f6d\u00f6ll\u0151"
      }, 
      {
        "id": "005540584", 
        "is_domestic": true, 
        "latitude": 47.5643823077127, 
        "legacy_id": 1891, 
        "longitude": 19.3756613353029, 
        "name": "G\u00f6d\u00f6ll\u0151-\u00c1llami telepek"
      }, 
      {
        "id": "005512674_137", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1894, 
        "longitude": null, 
        "name": "G\u00f6m\u00f6ri (Miskolc-G\u00f6m\u00f6ri)"
      }, 
      {
        "id": "005513383", 
        "is_domestic": true, 
        "latitude": 48.4706206581209, 
        "legacy_id": 1895, 
        "longitude": 21.2614110427217, 
        "name": "G\u00f6nc"
      }, 
      {
        "id": "005513375", 
        "is_domestic": true, 
        "latitude": 48.4451949144606, 
        "legacy_id": 1896, 
        "longitude": 21.2469750871995, 
        "name": "G\u00f6ncruszka"
      }, 
      {
        "id": "005511494", 
        "is_domestic": true, 
        "latitude": 48.0399316098515, 
        "legacy_id": 1899, 
        "longitude": 21.5555802359881, 
        "name": "G\u00f6r\u00f6gsz\u00e1ll\u00e1s"
      }, 
      {
        "id": "008102969", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1902, 
        "longitude": null, 
        "name": "G\u00f6tzendorf"
      }, 
      {
        "id": "007873109", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1906, 
        "longitude": null, 
        "name": "Gradec"
      }, 
      {
        "id": "008102968", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1914, 
        "longitude": null, 
        "name": "Gramatneusiedl"
      }, 
      {
        "id": "008103172", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1918, 
        "longitude": null, 
        "name": "GRAZ*"
      }, 
      {
        "id": "008103490", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1919, 
        "longitude": null, 
        "name": "Graz Don Bosco"
      }, 
      {
        "id": "008103171", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1920, 
        "longitude": null, 
        "name": "Graz Hbf"
      }, 
      {
        "id": "008103487", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6772, 
        "longitude": null, 
        "name": "Graz Liebenau Murpark"
      }, 
      {
        "id": "008103491", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1921, 
        "longitude": null, 
        "name": "Graz Ostbf"
      }, 
      {
        "id": "005504952", 
        "is_domestic": true, 
        "latitude": 46.6468620733188, 
        "legacy_id": 1981, 
        "longitude": 16.7398907566104, 
        "name": "Gutorf\u00f6lde"
      }, 
      {
        "id": "008002084", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1982, 
        "longitude": null, 
        "name": "G\u00fcnzburg"
      }, 
      {
        "id": "005516816", 
        "is_domestic": true, 
        "latitude": 47.3759619582743, 
        "legacy_id": 1984, 
        "longitude": 19.2202480864762, 
        "name": "Gy\u00e1l"
      }, 
      {
        "id": "005516808", 
        "is_domestic": true, 
        "latitude": 47.3894772862276, 
        "legacy_id": 1985, 
        "longitude": 19.2057408135044, 
        "name": "Gy\u00e1l fels\u0151"
      }, 
      {
        "id": "008103508_138", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 1986, 
        "longitude": null, 
        "name": "Gyanafalva (Jennersdorf)"
      }, 
      {
        "id": "005502105_139", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 1987, 
        "longitude": null, 
        "name": "Gyarmat (Gecse-Gyarmat)"
      }, 
      {
        "id": "005504010_140", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7451, 
        "longitude": null, 
        "name": "Gy\u00e1rtelep (Ajka) (Ajka-Gy\u00e1rtelep)"
      }, 
      {
        "id": "005510397_141", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7457, 
        "longitude": null, 
        "name": "Gy\u00e1rtelep (Dunakeszi) (Dunakeszi-Gy\u00e1rtelep)"
      }, 
      {
        "id": "005543984_142", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7452, 
        "longitude": null, 
        "name": "Gy\u00e1rtelep (Tiszaf\u00fcred) (Tiszaf\u00fcred-Gy\u00e1rtelep)"
      }, 
      {
        "id": "005501263_143", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6698, 
        "longitude": null, 
        "name": "Gy\u00e1rv\u00e1ros (Gy\u0151r-Gy\u00e1rv\u00e1ros)"
      }, 
      {
        "id": "005506437", 
        "is_domestic": true, 
        "latitude": 46.2492995717275, 
        "legacy_id": 1988, 
        "longitude": 16.955962732145, 
        "name": "Gy\u00e9k\u00e9nyes"
      }, 
      {
        "id": "005504762", 
        "is_domestic": true, 
        "latitude": 46.763344942382, 
        "legacy_id": 1989, 
        "longitude": 17.2925078250636, 
        "name": "Gyenesdi\u00e1s"
      }, 
      {
        "id": "005340579_144", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7414, 
        "longitude": null, 
        "name": "Gyergy\u00f3szentmikl\u00f3s (Gheorgheni)"
      }, 
      {
        "id": "005517863", 
        "is_domestic": true, 
        "latitude": 46.9270393938616, 
        "legacy_id": 1991, 
        "longitude": 20.8211954339439, 
        "name": "Gyoma"
      }, 
      {
        "id": "005516857", 
        "is_domestic": true, 
        "latitude": 47.1806148746266, 
        "legacy_id": 1992, 
        "longitude": 19.3518398121456, 
        "name": "Gy\u00f3n"
      }, 
      {
        "id": "005517509", 
        "is_domestic": true, 
        "latitude": 46.567708442883, 
        "legacy_id": 1993, 
        "longitude": 20.6306608086738, 
        "name": "Gyop\u00e1rosf\u00fcrd\u0151"
      }, 
      {
        "id": "005502089", 
        "is_domestic": true, 
        "latitude": 47.4853053818318, 
        "legacy_id": 1994, 
        "longitude": 17.5586686493346, 
        "name": "Gy\u00f6m\u00f6re"
      }, 
      {
        "id": "005502071", 
        "is_domestic": true, 
        "latitude": 47.5016906889279, 
        "legacy_id": 1995, 
        "longitude": 17.5595882330351, 
        "name": "Gy\u00f6m\u00f6re-T\u00e9t"
      }, 
      {
        "id": "005511577", 
        "is_domestic": true, 
        "latitude": 47.4296353372608, 
        "legacy_id": 1996, 
        "longitude": 19.3933417597212, 
        "name": "Gy\u00f6mr\u0151"
      }, 
      {
        "id": "005545534", 
        "is_domestic": true, 
        "latitude": 45.983144084156, 
        "legacy_id": 1997, 
        "longitude": 17.9568762894501, 
        "name": "Gy\u00f6ngyfa-Magyarmecske"
      }, 
      {
        "id": "005512096", 
        "is_domestic": true, 
        "latitude": 47.7831396705898, 
        "legacy_id": 1998, 
        "longitude": 19.9372442986369, 
        "name": "Gy\u00f6ngy\u00f6s"
      }, 
      {
        "id": "004305512", 
        "is_domestic": true, 
        "latitude": 47.316358655976, 
        "legacy_id": 1999, 
        "longitude": 16.5886367361074, 
        "name": "Gy\u00f6ngy\u00f6sfalu"
      }, 
      {
        "id": "005512088", 
        "is_domestic": true, 
        "latitude": 47.7441584641625, 
        "legacy_id": 2000, 
        "longitude": 19.932289352449, 
        "name": "Gy\u00f6ngy\u00f6shal\u00e1sz"
      }, 
      {
        "id": "004346169", 
        "is_domestic": true, 
        "latitude": 47.2027700175918, 
        "legacy_id": 2001, 
        "longitude": 16.6571779981047, 
        "name": "Gy\u00f6ngy\u00f6sherm\u00e1n"
      }, 
      {
        "id": "005506106_145", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2002, 
        "longitude": null, 
        "name": "Gy\u00f6nk (Kesz\u0151hidegk\u00fat-Gy\u00f6nk)"
      }, 
      {
        "id": "005501289", 
        "is_domestic": true, 
        "latitude": 47.6822663533916, 
        "legacy_id": 2003, 
        "longitude": 17.6349441297605, 
        "name": "Gy\u0151r"
      }, 
      {
        "id": "005502956", 
        "is_domestic": true, 
        "latitude": 47.4941163121277, 
        "legacy_id": 2004, 
        "longitude": 17.7989378471585, 
        "name": "Gy\u0151rasszonyfa"
      }, 
      {
        "id": "005501263", 
        "is_domestic": true, 
        "latitude": 47.684548, 
        "legacy_id": 2005, 
        "longitude": 17.662096, 
        "name": "Gy\u0151r-Gy\u00e1rv\u00e1ros"
      }, 
      {
        "id": "005504788_146", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2006, 
        "longitude": null, 
        "name": "Gy\u00f6r\u00f6k (Balatongy\u00f6r\u00f6k)"
      }, 
      {
        "id": "005502022", 
        "is_domestic": true, 
        "latitude": 47.6630719902149, 
        "legacy_id": 2007, 
        "longitude": 17.6480780259351, 
        "name": "Gy\u0151rszabadhegy"
      }, 
      {
        "id": "005502055", 
        "is_domestic": true, 
        "latitude": 47.5670917474665, 
        "legacy_id": 2008, 
        "longitude": 17.5845512700003, 
        "name": "Gy\u0151rszemere"
      }, 
      {
        "id": "005501255", 
        "is_domestic": true, 
        "latitude": 47.6888107832808, 
        "legacy_id": 2009, 
        "longitude": 17.745948779872, 
        "name": "Gy\u0151rszentiv\u00e1n"
      }, 
      {
        "id": "005515529", 
        "is_domestic": true, 
        "latitude": 47.9368453618445, 
        "legacy_id": 2010, 
        "longitude": 22.4246909242854, 
        "name": "Gy\u0151rtelek"
      }, 
      {
        "id": "005515537", 
        "is_domestic": true, 
        "latitude": 47.9210760489733, 
        "legacy_id": 2011, 
        "longitude": 22.443394351743, 
        "name": "Gy\u0151rtelek als\u00f3"
      }, 
      {
        "id": "004305348", 
        "is_domestic": true, 
        "latitude": 46.9897153923902, 
        "legacy_id": 2012, 
        "longitude": 16.8418462063473, 
        "name": "Gy\u0151rv\u00e1r"
      }, 
      {
        "id": "005518697", 
        "is_domestic": true, 
        "latitude": 46.6563020596271, 
        "legacy_id": 2013, 
        "longitude": 21.2735486380136, 
        "name": "Gyula"
      }, 
      {
        "id": "005544479", 
        "is_domestic": true, 
        "latitude": 46.6948541611194, 
        "legacy_id": 2015, 
        "longitude": 21.3227141888879, 
        "name": "Gyulai v\u00e1roserd\u0151"
      }, 
      {
        "id": "005515917", 
        "is_domestic": true, 
        "latitude": 48.1717328798594, 
        "legacy_id": 2016, 
        "longitude": 22.2692532658224, 
        "name": "Gy\u00fcre"
      }, 
      {
        "id": "005514670", 
        "is_domestic": true, 
        "latitude": 47.6688423457054, 
        "legacy_id": 2035, 
        "longitude": 21.5239786376639, 
        "name": "Hajd\u00fab\u00f6sz\u00f6rm\u00e9ny"
      }, 
      {
        "id": "005514696", 
        "is_domestic": true, 
        "latitude": 47.8054301004021, 
        "legacy_id": 2036, 
        "longitude": 21.493073099564, 
        "name": "Hajd\u00fadorog"
      }, 
      {
        "id": "005513953", 
        "is_domestic": true, 
        "latitude": 47.6872419890613, 
        "legacy_id": 2037, 
        "longitude": 21.6792826309075, 
        "name": "Hajd\u00fahadh\u00e1z"
      }, 
      {
        "id": "005514704", 
        "is_domestic": true, 
        "latitude": 47.8318069720808, 
        "legacy_id": 2038, 
        "longitude": 21.4276356513608, 
        "name": "Hajd\u00fan\u00e1n\u00e1s"
      }, 
      {
        "id": "005514712", 
        "is_domestic": true, 
        "latitude": 47.8427422708821, 
        "legacy_id": 2039, 
        "longitude": 21.4075473817526, 
        "name": "Hajd\u00fan\u00e1n\u00e1s-V\u00e1s\u00e1rt\u00e9r"
      }, 
      {
        "id": "005515347", 
        "is_domestic": true, 
        "latitude": 47.608133434297, 
        "legacy_id": 2040, 
        "longitude": 21.7552097178703, 
        "name": "Hajd\u00fas\u00e1mson"
      }, 
      {
        "id": "005514654", 
        "is_domestic": true, 
        "latitude": 47.6081185539758, 
        "legacy_id": 2041, 
        "longitude": 21.5786207461369, 
        "name": "Hajd\u00faszentgy\u00f6rgy"
      }, 
      {
        "id": "005513888", 
        "is_domestic": true, 
        "latitude": 47.4294805965494, 
        "legacy_id": 2042, 
        "longitude": 21.4070691868922, 
        "name": "Hajd\u00faszoboszl\u00f3"
      }, 
      {
        "id": "005514688", 
        "is_domestic": true, 
        "latitude": 47.748554468046, 
        "legacy_id": 2043, 
        "longitude": 21.5082508046699, 
        "name": "Hajd\u00favid"
      }, 
      {
        "id": "005503939", 
        "is_domestic": true, 
        "latitude": 47.1410804922128, 
        "legacy_id": 2044, 
        "longitude": 18.0093192369868, 
        "name": "Hajm\u00e1sk\u00e9r"
      }, 
      {
        "id": "005514878", 
        "is_domestic": true, 
        "latitude": 47.9988657098112, 
        "legacy_id": 2046, 
        "longitude": 21.4148049100424, 
        "name": "Hajnalos"
      }, 
      {
        "id": "005515156", 
        "is_domestic": true, 
        "latitude": 47.5216811286529, 
        "legacy_id": 2047, 
        "longitude": 21.8187609270737, 
        "name": "Hal\u00e1p"
      }, 
      {
        "id": "005514530_147", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Halast\u00f3 (Hortob\u00e1gyi Halast\u00f3)"
      }, 
      {
        "id": "005542481_148", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Halast\u00f3 (B\u00e1nhalma-Halast\u00f3)"
      }, 
      {
        "id": "005544396", 
        "is_domestic": true, 
        "latitude": 46.9115141520527, 
        "legacy_id": 2048, 
        "longitude": 20.5623681857975, 
        "name": "Hal\u00e1szlak"
      }, 
      {
        "id": "005502063", 
        "is_domestic": true, 
        "latitude": 47.5201986154661, 
        "legacy_id": 2051, 
        "longitude": 17.5604704858701, 
        "name": "Halipuszta"
      }, 
      {
        "id": "005513169", 
        "is_domestic": true, 
        "latitude": 48.2466404254295, 
        "legacy_id": 2058, 
        "longitude": 20.9915333949652, 
        "name": "Halmaj"
      }, 
      {
        "id": "008099970", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2062, 
        "longitude": null, 
        "name": "HAMBURG*"
      }, 
      {
        "id": "008001071", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2064, 
        "longitude": null, 
        "name": "Hamburg Hbf"
      }, 
      {
        "id": "008001093", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2065, 
        "longitude": null, 
        "name": "Hamburg-Altona"
      }, 
      {
        "id": "008001063", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2066, 
        "longitude": null, 
        "name": "Hamburg-Bergedorf"
      }, 
      {
        "id": "004345666", 
        "is_domestic": true, 
        "latitude": 47.7200654249643, 
        "legacy_id": 2079, 
        "longitude": 17.2156562772552, 
        "name": "Hans\u00e1gliget"
      }, 
      {
        "id": "004302352", 
        "is_domestic": true, 
        "latitude": 47.7410229902358, 
        "legacy_id": 2080, 
        "longitude": 17.1890329916409, 
        "name": "Hans\u00e1g-Nagyerd\u0151"
      }, 
      {
        "id": "004346375", 
        "is_domestic": true, 
        "latitude": 46.964639, 
        "legacy_id": 2085, 
        "longitude": 16.282662, 
        "name": "Haris"
      }, 
      {
        "id": "005516733", 
        "is_domestic": true, 
        "latitude": 46.4584342252349, 
        "legacy_id": 2086, 
        "longitude": 19.6021098659342, 
        "name": "Harkak\u00f6t\u00f6ny"
      }, 
      {
        "id": "005514126_149", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6792, 
        "longitude": null, 
        "name": "H\u00e1rmas\u00fat (Kisv\u00e1rda-H\u00e1rmas\u00fat)"
      }, 
      {
        "id": "005505785", 
        "is_domestic": true, 
        "latitude": 47.4130198730913, 
        "legacy_id": 2088, 
        "longitude": 19.0363311177078, 
        "name": "H\u00e1ros"
      }, 
      {
        "id": "007943703_150", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2090, 
        "longitude": null, 
        "name": "H\u00e1rsliget (Lipovci)"
      }, 
      {
        "id": "008103509", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 9966, 
        "longitude": null, 
        "name": "Hart bei Graz"
      }, 
      {
        "id": "005511817_151", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2098, 
        "longitude": null, 
        "name": "Hasznos (M\u00e1trasz\u0151l\u0151s-Hasznos)"
      }, 
      {
        "id": "005511205", 
        "is_domestic": true, 
        "latitude": 47.6634276776199, 
        "legacy_id": 2102, 
        "longitude": 19.6717846645993, 
        "name": "Hatvan"
      }, 
      {
        "id": "005514670_152", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6813, 
        "longitude": null, 
        "name": "H.b\u00f6sz\u00f6rm\u00e9ny (Hajd\u00fab\u00f6sz\u00f6rm\u00e9ny)"
      }, 
      {
        "id": "005514696_153", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6743, 
        "longitude": null, 
        "name": "H.dorog (Hajd\u00fadorog)"
      }, 
      {
        "id": "005501362", 
        "is_domestic": true, 
        "latitude": 47.9135532387146, 
        "legacy_id": 2111, 
        "longitude": 17.1476438174789, 
        "name": "Hegyeshalom"
      }, 
      {
        "id": "004302469", 
        "is_domestic": true, 
        "latitude": 47.3580932232525, 
        "legacy_id": 2112, 
        "longitude": 16.898653764826, 
        "name": "Hegyfalu"
      }, 
      {
        "id": "005513367", 
        "is_domestic": true, 
        "latitude": 48.4189693299834, 
        "legacy_id": 2119, 
        "longitude": 21.2453894145394, 
        "name": "Hejce-Vilm\u00e1ny"
      }, 
      {
        "id": "005512559", 
        "is_domestic": true, 
        "latitude": 47.9604886793742, 
        "legacy_id": 2120, 
        "longitude": 20.8695858387336, 
        "name": "Hej\u0151kereszt\u00far"
      }, 
      {
        "id": "005517442", 
        "is_domestic": true, 
        "latitude": 46.6750474481241, 
        "legacy_id": 2121, 
        "longitude": 20.2666947765555, 
        "name": "H\u00e9k\u00e9d"
      }, 
      {
        "id": "005507252_154", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2123, 
        "longitude": null, 
        "name": "Helesfa (Cserdi-Helesfa)"
      }, 
      {
        "id": "005501065", 
        "is_domestic": true, 
        "latitude": 47.4939931473576, 
        "legacy_id": 2131, 
        "longitude": 18.7432683641151, 
        "name": "Herceghalom"
      }, 
      {
        "id": "005503954", 
        "is_domestic": true, 
        "latitude": 47.1369349776735, 
        "legacy_id": 2132, 
        "longitude": 17.7608028894001, 
        "name": "Herend"
      }, 
      {
        "id": "005516865", 
        "is_domestic": true, 
        "latitude": 47.1611995892004, 
        "legacy_id": 2136, 
        "longitude": 19.4026064580135, 
        "name": "Hern\u00e1d"
      }, 
      {
        "id": "005511403", 
        "is_domestic": true, 
        "latitude": 48.0515552235349, 
        "legacy_id": 2137, 
        "longitude": 20.9852308012521, 
        "name": "Hern\u00e1dn\u00e9meti-B\u0151cs"
      }, 
      {
        "id": "005513235", 
        "is_domestic": true, 
        "latitude": 48.4866256218076, 
        "legacy_id": 2138, 
        "longitude": 21.2133422596757, 
        "name": "Hern\u00e1dszurdok"
      }, 
      {
        "id": "005516956", 
        "is_domestic": true, 
        "latitude": 46.9308524112263, 
        "legacy_id": 2149, 
        "longitude": 19.5950240865734, 
        "name": "Het\u00e9nyegyh\u00e1za"
      }, 
      {
        "id": "005507237", 
        "is_domestic": true, 
        "latitude": 46.1283195714142, 
        "legacy_id": 2151, 
        "longitude": 18.0450893844916, 
        "name": "Hetvehely"
      }, 
      {
        "id": "005512286", 
        "is_domestic": true, 
        "latitude": 47.6093621030844, 
        "legacy_id": 2154, 
        "longitude": 20.3060565667362, 
        "name": "Heves"
      }, 
      {
        "id": "005512294", 
        "is_domestic": true, 
        "latitude": 47.5617242741852, 
        "legacy_id": 2155, 
        "longitude": 20.3663358042794, 
        "name": "Hevesvezek\u00e9ny"
      }, 
      {
        "id": "005504747_155", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2156, 
        "longitude": null, 
        "name": "H\u00e9v\u00edz (Keszthely)"
      }, 
      {
        "id": "005511171", 
        "is_domestic": true, 
        "latitude": 47.6387697763145, 
        "legacy_id": 2157, 
        "longitude": 19.5259164959169, 
        "name": "H\u00e9v\u00edzgy\u00f6rk"
      }, 
      {
        "id": "005513953_156", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6837, 
        "longitude": null, 
        "name": "H.hadh\u00e1z (Hajd\u00fahadh\u00e1z)"
      }, 
      {
        "id": "005507088", 
        "is_domestic": true, 
        "latitude": 46.2692999360198, 
        "legacy_id": 2158, 
        "longitude": 18.5235683655916, 
        "name": "Hidas-Bonyh\u00e1d"
      }, 
      {
        "id": "005513243", 
        "is_domestic": true, 
        "latitude": 48.5088005001696, 
        "legacy_id": 2159, 
        "longitude": 21.2302857093877, 
        "name": "Hidasn\u00e9meti"
      }, 
      {
        "id": "005514704_157", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6646, 
        "longitude": null, 
        "name": "H.n\u00e1n\u00e1s (Hajd\u00fan\u00e1n\u00e1s)"
      }, 
      {
        "id": "005515479", 
        "is_domestic": true, 
        "latitude": 47.8961417205357, 
        "legacy_id": 2183, 
        "longitude": 22.2135192279257, 
        "name": "Hod\u00e1sz"
      }, 
      {
        "id": "005518572", 
        "is_domestic": true, 
        "latitude": 46.4132905678657, 
        "legacy_id": 2185, 
        "longitude": 20.339659925437, 
        "name": "H\u00f3dmez\u0151v\u00e1s\u00e1rhely"
      }, 
      {
        "id": "005518564", 
        "is_domestic": true, 
        "latitude": 46.4034176624457, 
        "legacy_id": 2186, 
        "longitude": 20.3126967475213, 
        "name": "H\u00f3dmez\u0151v\u00e1s\u00e1rhelyi N\u00e9pkert"
      }, 
      {
        "id": "005433845", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2187, 
        "longitude": null, 
        "name": "Hodonin"
      }, 
      {
        "id": "007943777", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7907, 
        "longitude": null, 
        "name": "Hodo\u0161"
      }, 
      {
        "id": "008103507", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2192, 
        "longitude": null, 
        "name": "Hohenbrugg A.D.Raab"
      }, 
      {
        "id": "005518119", 
        "is_domestic": true, 
        "latitude": 46.9458509784942, 
        "legacy_id": 2207, 
        "longitude": 20.2697917348321, 
        "name": "Homok"
      }, 
      {
        "id": "005514522", 
        "is_domestic": true, 
        "latitude": 47.5860272051831, 
        "legacy_id": 2229, 
        "longitude": 21.1542717534761, 
        "name": "Hortob\u00e1gy"
      }, 
      {
        "id": "005514530", 
        "is_domestic": true, 
        "latitude": 47.6040048023262, 
        "legacy_id": 2230, 
        "longitude": 21.0742161752588, 
        "name": "Hortob\u00e1gyi Halast\u00f3"
      }, 
      {
        "id": "004345658", 
        "is_domestic": true, 
        "latitude": 47.004996, 
        "legacy_id": 2231, 
        "longitude": 16.543849, 
        "name": "Horv\u00e1tn\u00e1dalja"
      }, 
      {
        "id": "005541269", 
        "is_domestic": true, 
        "latitude": 47.3703238827206, 
        "legacy_id": 2232, 
        "longitude": 19.3903204904527, 
        "name": "Hossz\u00faberek-P\u00e9teri"
      }, 
      {
        "id": "005514290", 
        "is_domestic": true, 
        "latitude": 47.2355342389925, 
        "legacy_id": 2233, 
        "longitude": 21.1020080845138, 
        "name": "Hossz\u00fah\u00e1t"
      }, 
      {
        "id": "005506130_158", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2237, 
        "longitude": null, 
        "name": "H\u0151gy\u00e9sz (Szak\u00e1ly-H\u0151gy\u00e9sz)"
      }, 
      {
        "id": "005433722", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2245, 
        "longitude": null, 
        "name": "Hranice Na Morave"
      }, 
      {
        "id": "005515347_159", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6783, 
        "longitude": null, 
        "name": "H.s\u00e1mson (Hajd\u00fas\u00e1mson)"
      }, 
      {
        "id": "005514654_160", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6839, 
        "longitude": null, 
        "name": "H.szentgy\u00f6rgy (Hajd\u00faszentgy\u00f6rgy)"
      }, 
      {
        "id": "005513888_161", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6656, 
        "longitude": null, 
        "name": "H.szoboszl\u00f3 (Hajd\u00faszoboszl\u00f3)"
      }, 
      {
        "id": "005332261", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2261, 
        "longitude": null, 
        "name": "Huedin"
      }, 
      {
        "id": "005510983", 
        "is_domestic": true, 
        "latitude": 48.0829028062048, 
        "legacy_id": 2267, 
        "longitude": 19.4235386357473, 
        "name": "Hugyag"
      }, 
      {
        "id": "005514688_162", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6782, 
        "longitude": null, 
        "name": "H.vid (Hajd\u00favid)"
      }, 
      {
        "id": "005342747", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2284, 
        "longitude": null, 
        "name": "Iernut"
      }, 
      {
        "id": "005510801", 
        "is_domestic": true, 
        "latitude": 47.6581024986545, 
        "legacy_id": 2291, 
        "longitude": 19.4440060114738, 
        "name": "Iklad-Domony"
      }, 
      {
        "id": "005510819", 
        "is_domestic": true, 
        "latitude": 47.6676722561885, 
        "legacy_id": 2292, 
        "longitude": 19.4281879927847, 
        "name": "Iklad-Domony fels\u0151"
      }, 
      {
        "id": "005504978", 
        "is_domestic": true, 
        "latitude": 46.6031948473766, 
        "legacy_id": 2293, 
        "longitude": 16.6038498578092, 
        "name": "Ikl\u00f3db\u00f6rd\u0151ce"
      }, 
      {
        "id": "004302519", 
        "is_domestic": true, 
        "latitude": 47.6576728064763, 
        "legacy_id": 2294, 
        "longitude": 17.5238584099653, 
        "name": "Ikr\u00e9ny"
      }, 
      {
        "id": "005341793", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2297, 
        "longitude": null, 
        "name": "Ilba"
      }, 
      {
        "id": "005321406", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2299, 
        "longitude": null, 
        "name": "Ilia"
      }, 
      {
        "id": "005341793_163", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2304, 
        "longitude": null, 
        "name": "Iloba (Ilba)"
      }, 
      {
        "id": "005549445", 
        "is_domestic": true, 
        "latitude": 46.6804057039101, 
        "legacy_id": 2312, 
        "longitude": 17.4997622898789, 
        "name": "Imremajor"
      }, 
      {
        "id": "005513185", 
        "is_domestic": true, 
        "latitude": 48.2893332178005, 
        "legacy_id": 2315, 
        "longitude": 21.0538281387338, 
        "name": "In\u00e1ncs"
      }, 
      {
        "id": "005516832", 
        "is_domestic": true, 
        "latitude": 47.2471267284921, 
        "legacy_id": 2316, 
        "longitude": 19.3180107057583, 
        "name": "In\u00e1rcs-Kakucs"
      }, 
      {
        "id": "007216801_164", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2319, 
        "longitude": null, 
        "name": "India (Indjija)"
      }, 
      {
        "id": "007216801", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2320, 
        "longitude": null, 
        "name": "Indjija"
      }, 
      {
        "id": "008108996", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2322, 
        "longitude": null, 
        "name": "INNSBRUCK*"
      }, 
      {
        "id": "008101187", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2323, 
        "longitude": null, 
        "name": "Innsbruck Hbf."
      }, 
      {
        "id": "005504275_165", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6692, 
        "longitude": null, 
        "name": "Ipartelepek (Polg\u00e1rdi-Ipartelepek)"
      }, 
      {
        "id": "005510728", 
        "is_domestic": true, 
        "latitude": 48.0546594400009, 
        "legacy_id": 2336, 
        "longitude": 19.2233716029277, 
        "name": "Ipolysz\u00f6g"
      }, 
      {
        "id": "005511056", 
        "is_domestic": true, 
        "latitude": 48.2365910073761, 
        "legacy_id": 2337, 
        "longitude": 19.6290746302006, 
        "name": "Ipolytarn\u00f3c"
      }, 
      {
        "id": "005510702", 
        "is_domestic": true, 
        "latitude": 48.0575479046207, 
        "legacy_id": 2338, 
        "longitude": 19.1069224461927, 
        "name": "Ipolyvece"
      }, 
      {
        "id": "005511122", 
        "is_domestic": true, 
        "latitude": 47.5374299563147, 
        "legacy_id": 2343, 
        "longitude": 19.3894092903022, 
        "name": "Isaszeg"
      }, 
      {
        "id": "005510132", 
        "is_domestic": true, 
        "latitude": 47.5503338147095, 
        "legacy_id": 2350, 
        "longitude": 19.1063394481431, 
        "name": "Istv\u00e1ntelek"
      }, 
      {
        "id": "005546326", 
        "is_domestic": true, 
        "latitude": 47.6418691135955, 
        "legacy_id": 2355, 
        "longitude": 19.2741975070237, 
        "name": "Ivacs"
      }, 
      {
        "id": "005505868", 
        "is_domestic": true, 
        "latitude": 47.1778321220846, 
        "legacy_id": 2357, 
        "longitude": 18.8118817443317, 
        "name": "Iv\u00e1ncsa"
      }, 
      {
        "id": "007943603", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2361, 
        "longitude": null, 
        "name": "Ivanjkovci"
      }, 
      {
        "id": "005340490", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2370, 
        "longitude": null, 
        "name": "Izvoru Oltului"
      }, 
      {
        "id": "004302261", 
        "is_domestic": true, 
        "latitude": 47.1612802671934, 
        "legacy_id": 2374, 
        "longitude": 16.6304677067287, 
        "name": "J\u00e1k-Balogunyom"
      }, 
      {
        "id": "005506338", 
        "is_domestic": true, 
        "latitude": 46.3445194158465, 
        "legacy_id": 2376, 
        "longitude": 17.5552723262099, 
        "name": "J\u00e1k\u00f3-Nagybajom"
      }, 
      {
        "id": "005515800", 
        "is_domestic": true, 
        "latitude": 47.9420513610243, 
        "legacy_id": 2379, 
        "longitude": 22.6566587552797, 
        "name": "J\u00e1nkmajtis"
      }, 
      {
        "id": "005516618", 
        "is_domestic": true, 
        "latitude": 46.2929338028837, 
        "legacy_id": 2380, 
        "longitude": 19.3305747246881, 
        "name": "J\u00e1noshalma"
      }, 
      {
        "id": "005504705", 
        "is_domestic": true, 
        "latitude": 47.1154376316768, 
        "legacy_id": 2381, 
        "longitude": 17.1715775559299, 
        "name": "J\u00e1nosh\u00e1za"
      }, 
      {
        "id": "005511981_166", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2382, 
        "longitude": null, 
        "name": "J\u00e1noshida (J\u00e1szboldogh\u00e1za-J\u00e1noshida)"
      }, 
      {
        "id": "004302345", 
        "is_domestic": true, 
        "latitude": 47.7890028814463, 
        "legacy_id": 2383, 
        "longitude": 17.1374382290352, 
        "name": "J\u00e1nossomorja"
      }, 
      {
        "id": "005544636", 
        "is_domestic": true, 
        "latitude": 46.3342854709691, 
        "legacy_id": 2384, 
        "longitude": 20.0511099672634, 
        "name": "J\u00e1nossz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005512039", 
        "is_domestic": true, 
        "latitude": 47.5136074139038, 
        "legacy_id": 2391, 
        "longitude": 20.155133027516, 
        "name": "J\u00e1szap\u00e1ti"
      }, 
      {
        "id": "005512013", 
        "is_domestic": true, 
        "latitude": 47.6360682543157, 
        "legacy_id": 2392, 
        "longitude": 19.9700895663965, 
        "name": "J\u00e1sz\u00e1roksz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005511957", 
        "is_domestic": true, 
        "latitude": 47.4946060391621, 
        "legacy_id": 2393, 
        "longitude": 19.893579513743, 
        "name": "J\u00e1szber\u00e9ny"
      }, 
      {
        "id": "005511981", 
        "is_domestic": true, 
        "latitude": 47.3673654447373, 
        "legacy_id": 2394, 
        "longitude": 20.0008918332718, 
        "name": "J\u00e1szboldogh\u00e1za-J\u00e1noshida"
      }, 
      {
        "id": "005512021", 
        "is_domestic": true, 
        "latitude": 47.562759465593, 
        "legacy_id": 2395, 
        "longitude": 20.0281325733636, 
        "name": "J\u00e1szd\u00f3zsa"
      }, 
      {
        "id": "005511932", 
        "is_domestic": true, 
        "latitude": 47.5935896603079, 
        "legacy_id": 2396, 
        "longitude": 19.753200597747, 
        "name": "J\u00e1szf\u00e9nyszaru"
      }, 
      {
        "id": "005512047", 
        "is_domestic": true, 
        "latitude": 47.4561259504045, 
        "legacy_id": 2397, 
        "longitude": 20.2035790659428, 
        "name": "J\u00e1szkis\u00e9r"
      }, 
      {
        "id": "005542432", 
        "is_domestic": true, 
        "latitude": 47.4380835692543, 
        "legacy_id": 2398, 
        "longitude": 20.2025628097973, 
        "name": "J\u00e1szkis\u00e9r fels\u0151"
      }, 
      {
        "id": "005512062", 
        "is_domestic": true, 
        "latitude": 47.3728541829865, 
        "legacy_id": 2399, 
        "longitude": 20.1586697605787, 
        "name": "J\u00e1szlad\u00e1ny"
      }, 
      {
        "id": "005516766", 
        "is_domestic": true, 
        "latitude": 46.5657833092478, 
        "legacy_id": 2400, 
        "longitude": 19.7536191552336, 
        "name": "J\u00e1szszentl\u00e1szl\u00f3"
      }, 
      {
        "id": "008101176", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2418, 
        "longitude": null, 
        "name": "Jenbach"
      }, 
      {
        "id": "008103508", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2419, 
        "longitude": null, 
        "name": "Jennersdorf"
      }, 
      {
        "id": "005547704", 
        "is_domestic": true, 
        "latitude": 47.8290762895036, 
        "legacy_id": 2432, 
        "longitude": 19.6873080300961, 
        "name": "Jobb\u00e1gyi"
      }, 
      {
        "id": "005613016_167", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2435, 
        "longitude": null, 
        "name": "J\u00f3k\u00fat (Kuty)"
      }, 
      {
        "id": "005513011", 
        "is_domestic": true, 
        "latitude": 48.4897007985589, 
        "legacy_id": 2437, 
        "longitude": 20.6934384393531, 
        "name": "J\u00f3svaf\u0151-Aggtelek"
      }, 
      {
        "id": "005514647", 
        "is_domestic": true, 
        "latitude": 47.6007736824346, 
        "legacy_id": 2438, 
        "longitude": 21.584377632673, 
        "name": "J\u00f3zsa"
      }, 
      {
        "id": "005518713", 
        "is_domestic": true, 
        "latitude": 46.7048863645258, 
        "legacy_id": 2439, 
        "longitude": 21.3331348974337, 
        "name": "J\u00f3zsef Szanat\u00f3rium"
      }, 
      {
        "id": "005517483", 
        "is_domestic": true, 
        "latitude": 46.6195379451181, 
        "legacy_id": 2445, 
        "longitude": 20.6165605085992, 
        "name": "Justhmajor"
      }, 
      {
        "id": "005513870", 
        "is_domestic": true, 
        "latitude": 47.3687559687741, 
        "legacy_id": 2446, 
        "longitude": 21.2594632654156, 
        "name": "Kaba"
      }, 
      {
        "id": "005507583", 
        "is_domestic": true, 
        "latitude": 45.9047103418813, 
        "legacy_id": 2451, 
        "longitude": 17.8522523124645, 
        "name": "K\u00e1kics"
      }, 
      {
        "id": "005516832_168", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2452, 
        "longitude": null, 
        "name": "Kakucs (In\u00e1rcs-Kakucs)"
      }, 
      {
        "id": "005511288", 
        "is_domestic": true, 
        "latitude": 47.734078213593, 
        "legacy_id": 2455, 
        "longitude": 20.2529580240368, 
        "name": "K\u00e1l-K\u00e1polna"
      }, 
      {
        "id": "005515438", 
        "is_domestic": true, 
        "latitude": 47.8544076516522, 
        "legacy_id": 2457, 
        "longitude": 21.9348070561583, 
        "name": "K\u00e1ll\u00f3semj\u00e9n"
      }, 
      {
        "id": "004347951", 
        "is_domestic": true, 
        "latitude": 47.254298802175, 
        "legacy_id": 2480, 
        "longitude": 16.6257926459696, 
        "name": "K\u00e1mon"
      }, 
      {
        "id": "005503624_169", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2483, 
        "longitude": null, 
        "name": "Kanizsa (Nagykanizsa)"
      }, 
      {
        "id": "005544594", 
        "is_domestic": true, 
        "latitude": 46.4353550335454, 
        "legacy_id": 2489, 
        "longitude": 19.9873938697389, 
        "name": "Kapit\u00e1nys\u00e1g"
      }, 
      {
        "id": "005511288_170", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2491, 
        "longitude": null, 
        "name": "K\u00e1polna (K\u00e1l-K\u00e1polna)"
      }, 
      {
        "id": "005503202", 
        "is_domestic": true, 
        "latitude": 47.2457794971354, 
        "legacy_id": 2492, 
        "longitude": 18.6926425508322, 
        "name": "K\u00e1poln\u00e1sny\u00e9k"
      }, 
      {
        "id": "005508334", 
        "is_domestic": true, 
        "latitude": 46.7136614316832, 
        "legacy_id": 2493, 
        "longitude": 17.9777904730343, 
        "name": "Kapoly"
      }, 
      {
        "id": "005506312", 
        "is_domestic": true, 
        "latitude": 46.3641015355663, 
        "legacy_id": 2494, 
        "longitude": 17.6602020297503, 
        "name": "Kaposf\u0151"
      }, 
      {
        "id": "005508425", 
        "is_domestic": true, 
        "latitude": 46.4143429228367, 
        "legacy_id": 2495, 
        "longitude": 17.7592673031171, 
        "name": "Kaposf\u00fcred"
      }, 
      {
        "id": "005506254", 
        "is_domestic": true, 
        "latitude": 46.3673751969333, 
        "legacy_id": 2496, 
        "longitude": 17.9218289134862, 
        "name": "Kaposhomok"
      }, 
      {
        "id": "005506304", 
        "is_domestic": true, 
        "latitude": 46.3652435470876, 
        "legacy_id": 2497, 
        "longitude": 17.6993979129207, 
        "name": "Kaposm\u00e9r\u0151"
      }, 
      {
        "id": "005506205", 
        "is_domestic": true, 
        "latitude": 46.3730787500152, 
        "legacy_id": 2498, 
        "longitude": 18.0969694915231, 
        "name": "Kapospula"
      }, 
      {
        "id": "005507187", 
        "is_domestic": true, 
        "latitude": 46.3309659645206, 
        "legacy_id": 2504, 
        "longitude": 18.1429987822757, 
        "name": "Kaposszekcs\u0151"
      }, 
      {
        "id": "005506270", 
        "is_domestic": true, 
        "latitude": 46.3571019826988, 
        "legacy_id": 2505, 
        "longitude": 17.8208041481671, 
        "name": "Kaposszentjakab"
      }, 
      {
        "id": "005508417", 
        "is_domestic": true, 
        "latitude": 46.3658745520902, 
        "legacy_id": 2499, 
        "longitude": 17.7738460178889, 
        "name": "Kapost\u00fcskev\u00e1r"
      }, 
      {
        "id": "005506296", 
        "is_domestic": true, 
        "latitude": 46.3670636463898, 
        "legacy_id": 2500, 
        "longitude": 17.7244241851751, 
        "name": "Kapos\u00fajlak"
      }, 
      {
        "id": "005506288", 
        "is_domestic": true, 
        "latitude": 46.3529162083011, 
        "legacy_id": 2501, 
        "longitude": 17.7945625550113, 
        "name": "Kaposv\u00e1r"
      }, 
      {
        "id": "005508417_171", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2502, 
        "longitude": null, 
        "name": "Kaposv\u00e1ri Textilm\u0171vek (Kapost\u00fcskev\u00e1r)"
      }, 
      {
        "id": "005506270_172", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2503, 
        "longitude": null, 
        "name": "Kaposv\u00e1r-K\u00f6zv\u00e1g\u00f3h\u00edd (Kaposszentjakab)"
      }, 
      {
        "id": "007873160_173", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2507, 
        "longitude": null, 
        "name": "Kapronca (Koprivnica)"
      }, 
      {
        "id": "005504374", 
        "is_domestic": true, 
        "latitude": 47.0102235577256, 
        "legacy_id": 2508, 
        "longitude": 18.0040385770758, 
        "name": "K\u00e1ptalanf\u00fcred"
      }, 
      {
        "id": "004302626", 
        "is_domestic": true, 
        "latitude": 47.5822232422726, 
        "legacy_id": 2510, 
        "longitude": 17.049237334569, 
        "name": "Kapuv\u00e1r"
      }, 
      {
        "id": "005511254", 
        "is_domestic": true, 
        "latitude": 47.7173055170623, 
        "legacy_id": 2511, 
        "longitude": 20.0455153772612, 
        "name": "Kar\u00e1csond"
      }, 
      {
        "id": "005508318", 
        "is_domestic": true, 
        "latitude": 46.6810883970476, 
        "legacy_id": 2513, 
        "longitude": 17.8748918799143, 
        "name": "Kar\u00e1d"
      }, 
      {
        "id": "005504077", 
        "is_domestic": true, 
        "latitude": 47.1334564545486, 
        "legacy_id": 2515, 
        "longitude": 17.2882146128289, 
        "name": "Karak\u00f3sz\u00f6rcs\u00f6k"
      }, 
      {
        "id": "005507575_174", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2518, 
        "longitude": null, 
        "name": "K\u00e1r\u00e1szpuszta (Okor\u00e1g-K\u00e1r\u00e1szpuszta)"
      }, 
      {
        "id": "005513847", 
        "is_domestic": true, 
        "latitude": 47.3034413837247, 
        "legacy_id": 2520, 
        "longitude": 20.9292331014039, 
        "name": "Karcag"
      }, 
      {
        "id": "005514209", 
        "is_domestic": true, 
        "latitude": 47.3219043363647, 
        "legacy_id": 2521, 
        "longitude": 20.907136898601, 
        "name": "Karcag-V\u00e1s\u00e1rt\u00e9r"
      }, 
      {
        "id": "005518358", 
        "is_domestic": true, 
        "latitude": 46.498269247083, 
        "legacy_id": 2522, 
        "longitude": 20.6978644136026, 
        "name": "Kardosk\u00fat"
      }, 
      {
        "id": "005501339_175", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6618, 
        "longitude": null, 
        "name": "K\u00e1rolyh\u00e1za (Kimle-K\u00e1rolyh\u00e1za)"
      }, 
      {
        "id": "002238351", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2531, 
        "longitude": null, 
        "name": "Karpaty"
      }, 
      {
        "id": "005613600_176", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2533, 
        "longitude": null, 
        "name": "Kassa (Kosice)"
      }, 
      {
        "id": "005503135", 
        "is_domestic": true, 
        "latitude": 47.3913112010755, 
        "legacy_id": 2538, 
        "longitude": 18.9913010591406, 
        "name": "Kast\u00e9lypark"
      }, 
      {
        "id": "005517103", 
        "is_domestic": true, 
        "latitude": 46.9630789122209, 
        "legacy_id": 2540, 
        "longitude": 19.7190809954105, 
        "name": "Katonatelep"
      }, 
      {
        "id": "005107331", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2542, 
        "longitude": null, 
        "name": "Katowice"
      }, 
      {
        "id": "005512781", 
        "is_domestic": true, 
        "latitude": 48.264431502226, 
        "legacy_id": 2550, 
        "longitude": 20.6274502290564, 
        "name": "Kazincbarcika"
      }, 
      {
        "id": "005543026", 
        "is_domestic": true, 
        "latitude": 48.255639608837, 
        "legacy_id": 2551, 
        "longitude": 20.6487111999967, 
        "name": "Kazincbarcika als\u00f3"
      }, 
      {
        "id": "005501750", 
        "is_domestic": true, 
        "latitude": 47.5203498887672, 
        "legacy_id": 2552, 
        "longitude": 18.3166348378323, 
        "name": "Kecsk\u00e9d als\u00f3"
      }, 
      {
        "id": "005517111", 
        "is_domestic": true, 
        "latitude": 46.9133543997579, 
        "legacy_id": 2553, 
        "longitude": 19.7009976568459, 
        "name": "Kecskem\u00e9t"
      }, 
      {
        "id": "005516535", 
        "is_domestic": true, 
        "latitude": 46.8957734443355, 
        "legacy_id": 2554, 
        "longitude": 19.6923897575058, 
        "name": "Kecskem\u00e9t als\u00f3"
      }, 
      {
        "id": "005516964", 
        "is_domestic": true, 
        "latitude": 46.9011930358007, 
        "legacy_id": 2555, 
        "longitude": 19.6760432153317, 
        "name": "Kecskem\u00e9t-M\u00e1riav\u00e1ros"
      }, 
      {
        "id": "005106700", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Kedzierzyn Kozle"
      }, 
      {
        "id": "005514068", 
        "is_domestic": true, 
        "latitude": 48.0933864137192, 
        "legacy_id": 2558, 
        "longitude": 21.8840148837778, 
        "name": "K\u00e9k"
      }, 
      {
        "id": "005516352", 
        "is_domestic": true, 
        "latitude": 46.1947007215075, 
        "legacy_id": 2559, 
        "longitude": 19.6099248105476, 
        "name": "Kelebia"
      }, 
      {
        "id": "005501024", 
        "is_domestic": true, 
        "latitude": 47.4652421778493, 
        "legacy_id": 2560, 
        "longitude": 19.0192167221872, 
        "name": "Kelenf\u00f6ld"
      }, 
      {
        "id": "005510017_177", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2561, 
        "longitude": null, 
        "name": "Keleti (Budapest-Keleti)"
      }, 
      {
        "id": "005514043", 
        "is_domestic": true, 
        "latitude": 48.065498360242, 
        "legacy_id": 2565, 
        "longitude": 21.8018134498556, 
        "name": "Kemecse"
      }, 
      {
        "id": "005504879", 
        "is_domestic": true, 
        "latitude": 46.9056958272206, 
        "legacy_id": 2566, 
        "longitude": 16.9467443854082, 
        "name": "Kemendoll\u00e1r"
      }, 
      {
        "id": "005502188", 
        "is_domestic": true, 
        "latitude": 47.2789999328961, 
        "legacy_id": 2567, 
        "longitude": 17.108861649209, 
        "name": "Kemenesmih\u00e1lyfa"
      }, 
      {
        "id": "005545872", 
        "is_domestic": true, 
        "latitude": 47.139152961706, 
        "legacy_id": 2568, 
        "longitude": 17.1828392556453, 
        "name": "Kemenesp\u00e1lfa"
      }, 
      {
        "id": "005512351", 
        "is_domestic": true, 
        "latitude": 47.2543043590313, 
        "legacy_id": 2570, 
        "longitude": 20.6862383911817, 
        "name": "Kenderes"
      }, 
      {
        "id": "005519141_178", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6760, 
        "longitude": null, 
        "name": "Kendergy\u00e1r (Nagylaki Kendergy\u00e1r)"
      }, 
      {
        "id": "005504341_179", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2572, 
        "longitude": null, 
        "name": "Kenese (Balatonkenese)"
      }, 
      {
        "id": "005518077", 
        "is_domestic": true, 
        "latitude": 47.0897911647692, 
        "legacy_id": 2574, 
        "longitude": 20.3399239004169, 
        "name": "Kengyel"
      }, 
      {
        "id": "005517756", 
        "is_domestic": true, 
        "latitude": 46.9024854811832, 
        "legacy_id": 2575, 
        "longitude": 20.0462740367046, 
        "name": "Kerekdomb"
      }, 
      {
        "id": "005504085", 
        "is_domestic": true, 
        "latitude": 47.1514430245797, 
        "legacy_id": 2576, 
        "longitude": 17.2385085953322, 
        "name": "Kerta"
      }, 
      {
        "id": "005513631_180", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2577, 
        "longitude": null, 
        "name": "Kertekalja (Vecs\u00e9s-Kertekalja)"
      }, 
      {
        "id": "005501503_181", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7446, 
        "longitude": null, 
        "name": "Kertv\u00e1ros (Esztergom) (Esztergom-Kertv\u00e1ros)"
      }, 
      {
        "id": "005540915_182", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7462, 
        "longitude": null, 
        "name": "Kertv\u00e1ros (R\u00e1kospalota) (R\u00e1kospalota-Kertv\u00e1ros)"
      }, 
      {
        "id": "005506106", 
        "is_domestic": true, 
        "latitude": 46.5972643290681, 
        "legacy_id": 2579, 
        "longitude": 18.4265437052056, 
        "name": "Kesz\u0151hidegk\u00fat-Gy\u00f6nk"
      }, 
      {
        "id": "005504747", 
        "is_domestic": true, 
        "latitude": 46.7580395549024, 
        "legacy_id": 2580, 
        "longitude": 17.2474119202006, 
        "name": "Keszthely"
      }, 
      {
        "id": "005518051", 
        "is_domestic": true, 
        "latitude": 46.5326935811954, 
        "legacy_id": 2581, 
        "longitude": 21.1721452987455, 
        "name": "K\u00e9tegyh\u00e1za"
      }, 
      {
        "id": "005517822", 
        "is_domestic": true, 
        "latitude": 47.0768840980896, 
        "legacy_id": 2582, 
        "longitude": 20.4878739583766, 
        "name": "K\u00e9tp\u00f3"
      }, 
      {
        "id": "005544883", 
        "is_domestic": true, 
        "latitude": 46.6890628880028, 
        "legacy_id": 2583, 
        "longitude": 20.0212303676671, 
        "name": "Kett\u0151shalom"
      }, 
      {
        "id": "005514589", 
        "is_domestic": true, 
        "latitude": 47.6941139553227, 
        "legacy_id": 2584, 
        "longitude": 20.5649357728128, 
        "name": "K\u00e9t\u00fatk\u00f6z"
      }, 
      {
        "id": "005506312_183", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6644, 
        "longitude": null, 
        "name": "K.f\u0151 (Kaposf\u0151)"
      }, 
      {
        "id": "005508425_184", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6739, 
        "longitude": null, 
        "name": "K.f\u00fcred (Kaposf\u00fcred)"
      }, 
      {
        "id": "005506254_185", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6828, 
        "longitude": null, 
        "name": "K.homok (Kaposhomok)"
      }, 
      {
        "id": "002232030", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2592, 
        "longitude": null, 
        "name": "Kiev-Passajirskii"
      }, 
      {
        "id": "002232030_186", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2593, 
        "longitude": null, 
        "name": "Kijev (Kiev-Passajirskii)"
      }, 
      {
        "id": "005501339", 
        "is_domestic": true, 
        "latitude": 47.804478741028, 
        "legacy_id": 2597, 
        "longitude": 17.3419926527165, 
        "name": "Kimle-K\u00e1rolyh\u00e1za"
      }, 
      {
        "id": "005507559", 
        "is_domestic": true, 
        "latitude": 45.9893623579615, 
        "legacy_id": 2601, 
        "longitude": 17.9723202976587, 
        "name": "Kir\u00e1lyegyh\u00e1za-Rig\u00f3puszta"
      }, 
      {
        "id": "008102974_187", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2603, 
        "longitude": null, 
        "name": "Kir\u00e1lyhida (Bruck a.d. Leitha)"
      }, 
      {
        "id": "005504580_188", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2615, 
        "longitude": null, 
        "name": "Kisap\u00e1ti (Nemesgul\u00e1cs-Kisap\u00e1ti)"
      }, 
      {
        "id": "005508284", 
        "is_domestic": true, 
        "latitude": 46.6149705595004, 
        "legacy_id": 2616, 
        "longitude": 17.8669196025446, 
        "name": "Kisb\u00e1rap\u00e1ti"
      }, 
      {
        "id": "005503764", 
        "is_domestic": true, 
        "latitude": 47.4942999921812, 
        "legacy_id": 2617, 
        "longitude": 18.0249384830413, 
        "name": "Kisb\u00e9r"
      }, 
      {
        "id": "005518291", 
        "is_domestic": true, 
        "latitude": 46.7190554930199, 
        "legacy_id": 2618, 
        "longitude": 20.7178486030849, 
        "name": "Kiscs\u00e1k\u00f3"
      }, 
      {
        "id": "005503293", 
        "is_domestic": true, 
        "latitude": 47.0480724340022, 
        "legacy_id": 2619, 
        "longitude": 18.354786552024, 
        "name": "Kiscs\u00e9ripuszta"
      }, 
      {
        "id": "005505702", 
        "is_domestic": true, 
        "latitude": 46.0120241619046, 
        "legacy_id": 2620, 
        "longitude": 17.6666745076468, 
        "name": "Kisdobsza"
      }, 
      {
        "id": "005544818", 
        "is_domestic": true, 
        "latitude": 46.888344462335, 
        "legacy_id": 2621, 
        "longitude": 19.8074817583488, 
        "name": "Kisf\u00e1i"
      }, 
      {
        "id": "005514886", 
        "is_domestic": true, 
        "latitude": 47.9890238267986, 
        "legacy_id": 2622, 
        "longitude": 21.470004795565, 
        "name": "Kisf\u00e1stanya"
      }, 
      {
        "id": "005545401_189", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2623, 
        "longitude": null, 
        "name": "Kishajm\u00e1s (Szatina-Kishajm\u00e1s)"
      }, 
      {
        "id": "005506320", 
        "is_domestic": true, 
        "latitude": 46.3624149658449, 
        "legacy_id": 2625, 
        "longitude": 17.60842635557, 
        "name": "Kiskorp\u00e1d"
      }, 
      {
        "id": "005512310", 
        "is_domestic": true, 
        "latitude": 47.4954380164649, 
        "legacy_id": 2626, 
        "longitude": 20.4817775214976, 
        "name": "Kisk\u00f6re"
      }, 
      {
        "id": "005543802", 
        "is_domestic": true, 
        "latitude": 47.4808254477229, 
        "legacy_id": 2627, 
        "longitude": 20.5075382031065, 
        "name": "Kisk\u00f6re-Tiszah\u00edd"
      }, 
      {
        "id": "005516261", 
        "is_domestic": true, 
        "latitude": 46.6259969243411, 
        "legacy_id": 2628, 
        "longitude": 19.297113009217, 
        "name": "Kisk\u0151r\u00f6s"
      }, 
      {
        "id": "005517194", 
        "is_domestic": true, 
        "latitude": 46.2707943674236, 
        "legacy_id": 2629, 
        "longitude": 20.0911325803671, 
        "name": "Kiskundorozsma"
      }, 
      {
        "id": "005517137", 
        "is_domestic": true, 
        "latitude": 46.7067720511326, 
        "legacy_id": 2630, 
        "longitude": 19.8348459045057, 
        "name": "Kiskunf\u00e9legyh\u00e1za"
      }, 
      {
        "id": "005516311", 
        "is_domestic": true, 
        "latitude": 46.4336438821964, 
        "legacy_id": 2631, 
        "longitude": 19.4937914028699, 
        "name": "Kiskunhalas"
      }, 
      {
        "id": "005516188", 
        "is_domestic": true, 
        "latitude": 47.184930527727, 
        "legacy_id": 2632, 
        "longitude": 19.0438133665753, 
        "name": "Kiskunlach\u00e1za"
      }, 
      {
        "id": "005516758", 
        "is_domestic": true, 
        "latitude": 46.5016648466895, 
        "legacy_id": 2633, 
        "longitude": 19.7278616648351, 
        "name": "Kiskunmajsa"
      }, 
      {
        "id": "005503988_190", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2634, 
        "longitude": null, 
        "name": "Kisl\u0151d (V\u00e1rosl\u0151d-Kisl\u0151d)"
      }, 
      {
        "id": "005515032", 
        "is_domestic": true, 
        "latitude": 47.2439394828179, 
        "legacy_id": 2635, 
        "longitude": 21.8139602538432, 
        "name": "Kismarja"
      }, 
      {
        "id": "005510462", 
        "is_domestic": true, 
        "latitude": 47.8271727572313, 
        "legacy_id": 2636, 
        "longitude": 19.0106368646604, 
        "name": "Kismaros"
      }, 
      {
        "id": "005544784", 
        "is_domestic": true, 
        "latitude": 46.753652448441, 
        "legacy_id": 2639, 
        "longitude": 19.8879858939762, 
        "name": "Kismindszenti \u00fat"
      }, 
      {
        "id": "005510199", 
        "is_domestic": true, 
        "latitude": 47.4478913077352, 
        "legacy_id": 2640, 
        "longitude": 19.1575081320059, 
        "name": "Kispest"
      }, 
      {
        "id": "005341808_191", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2641, 
        "longitude": null, 
        "name": "Kissebespatak (Sabisa)"
      }, 
      {
        "id": "005341779_192", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2642, 
        "longitude": null, 
        "name": "Kissik\u00e1rl\u00f3 (Cicarlau)"
      }, 
      {
        "id": "005516337", 
        "is_domestic": true, 
        "latitude": 46.2786938937487, 
        "legacy_id": 2658, 
        "longitude": 19.538562034942, 
        "name": "Kissz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005515792", 
        "is_domestic": true, 
        "latitude": 47.9658135162395, 
        "legacy_id": 2660, 
        "longitude": 22.6294411480473, 
        "name": "Kisszekeres"
      }, 
      {
        "id": "005518275", 
        "is_domestic": true, 
        "latitude": 46.7511706531015, 
        "legacy_id": 2661, 
        "longitude": 20.7216597012118, 
        "name": "Kissz\u00e9n\u00e1s"
      }, 
      {
        "id": "005517160", 
        "is_domestic": true, 
        "latitude": 46.4669759421654, 
        "legacy_id": 2643, 
        "longitude": 19.9671505715804, 
        "name": "Kistelek"
      }, 
      {
        "id": "005544586", 
        "is_domestic": true, 
        "latitude": 46.5142171780595, 
        "legacy_id": 2644, 
        "longitude": 19.9285776987571, 
        "name": "Kisteleki sz\u0151l\u0151k"
      }, 
      {
        "id": "005511858", 
        "is_domestic": true, 
        "latitude": 48.0094839395798, 
        "legacy_id": 2645, 
        "longitude": 19.8321041795896, 
        "name": "Kisterenye"
      }, 
      {
        "id": "005511866", 
        "is_domestic": true, 
        "latitude": 48.0233905303498, 
        "legacy_id": 2646, 
        "longitude": 19.8309289997181, 
        "name": "Kisterenye-B\u00e1nyatelep"
      }, 
      {
        "id": "005507427", 
        "is_domestic": true, 
        "latitude": 45.9095504891357, 
        "legacy_id": 2647, 
        "longitude": 18.315557517736, 
        "name": "Kist\u00f3tfalu"
      }, 
      {
        "id": "005518168", 
        "is_domestic": true, 
        "latitude": 46.7163957959215, 
        "legacy_id": 2648, 
        "longitude": 20.281886973474, 
        "name": "Kist\u0151ke"
      }, 
      {
        "id": "005513821", 
        "is_domestic": true, 
        "latitude": 47.223812455118, 
        "legacy_id": 2650, 
        "longitude": 20.7507650665472, 
        "name": "Kis\u00fajsz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005543976", 
        "is_domestic": true, 
        "latitude": 47.7950721322776, 
        "legacy_id": 2651, 
        "longitude": 19.1142118166474, 
        "name": "Kisv\u00e1c"
      }, 
      {
        "id": "005514118", 
        "is_domestic": true, 
        "latitude": 48.2086280041665, 
        "legacy_id": 2652, 
        "longitude": 22.0785039753115, 
        "name": "Kisv\u00e1rda"
      }, 
      {
        "id": "005514126", 
        "is_domestic": true, 
        "latitude": 48.228080427241, 
        "legacy_id": 2653, 
        "longitude": 22.0916970544463, 
        "name": "Kisv\u00e1rda-H\u00e1rmas\u00fat"
      }, 
      {
        "id": "005515925", 
        "is_domestic": true, 
        "latitude": 48.1518019807305, 
        "legacy_id": 2654, 
        "longitude": 22.2901261245727, 
        "name": "Kisvars\u00e1ny"
      }, 
      {
        "id": "005518986", 
        "is_domestic": true, 
        "latitude": 46.1919398840386, 
        "legacy_id": 2655, 
        "longitude": 20.4136220057136, 
        "name": "Kiszombor"
      }, 
      {
        "id": "005518994", 
        "is_domestic": true, 
        "latitude": 46.1909819812361, 
        "legacy_id": 2656, 
        "longitude": 20.4307555789916, 
        "name": "Kiszombor meg\u00e1ll\u00f3"
      }, 
      {
        "id": "005542143", 
        "is_domestic": true, 
        "latitude": 47.766527932879, 
        "legacy_id": 2663, 
        "longitude": 19.9351053491091, 
        "name": "Kit\u00e9r\u0151gy\u00e1r"
      }, 
      {
        "id": "008103002", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2664, 
        "longitude": null, 
        "name": "Kittsee"
      }, 
      {
        "id": "005516931", 
        "is_domestic": true, 
        "latitude": 47.0055740325286, 
        "legacy_id": 2669, 
        "longitude": 19.5514719185748, 
        "name": "Kl\u00e1bertelep"
      }, 
      {
        "id": "005501446", 
        "is_domestic": true, 
        "latitude": 47.6377551328539, 
        "legacy_id": 2700, 
        "longitude": 18.8464177441924, 
        "name": "Klotildliget"
      }, 
      {
        "id": "005506304_193", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6623, 
        "longitude": null, 
        "name": "K.m\u00e9r\u0151 (Kaposm\u00e9r\u0151)"
      }, 
      {
        "id": "005515503", 
        "is_domestic": true, 
        "latitude": 47.9419054577934, 
        "legacy_id": 2717, 
        "longitude": 22.3757412767052, 
        "name": "Kocsord"
      }, 
      {
        "id": "005515511", 
        "is_domestic": true, 
        "latitude": 47.9464942781311, 
        "legacy_id": 2718, 
        "longitude": 22.4006687143801, 
        "name": "Kocsord als\u00f3"
      }, 
      {
        "id": "005453414", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2726, 
        "longitude": null, 
        "name": "Kolin"
      }, 
      {
        "id": "005332015_194", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2729, 
        "longitude": null, 
        "name": "Kolozsv\u00e1r (Cluj Napoca)"
      }, 
      {
        "id": "005501222", 
        "is_domestic": true, 
        "latitude": 47.7497325717358, 
        "legacy_id": 2733, 
        "longitude": 18.1139807481575, 
        "name": "Kom\u00e1rom"
      }, 
      {
        "id": "005513037", 
        "is_domestic": true, 
        "latitude": 48.546339721009, 
        "legacy_id": 2734, 
        "longitude": 20.7569761256206, 
        "name": "Komj\u00e1ti"
      }, 
      {
        "id": "005507542", 
        "is_domestic": true, 
        "latitude": 46.1892181823561, 
        "legacy_id": 2736, 
        "longitude": 18.2648768437854, 
        "name": "Koml\u00f3"
      }, 
      {
        "id": "005505645_195", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2737, 
        "longitude": null, 
        "name": "Koml\u00f3sd (P\u00e9terhida-Koml\u00f3sd)"
      }, 
      {
        "id": "005514142", 
        "is_domestic": true, 
        "latitude": 48.3051643458525, 
        "legacy_id": 2738, 
        "longitude": 22.1180230905754, 
        "name": "Komor\u00f3"
      }, 
      {
        "id": "005515131_196", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2740, 
        "longitude": null, 
        "name": "Kondoros (Debrecen-Kondoros)"
      }, 
      {
        "id": "004302543", 
        "is_domestic": true, 
        "latitude": 47.6321673821713, 
        "legacy_id": 2747, 
        "longitude": 17.3573022899915, 
        "name": "K\u00f3ny"
      }, 
      {
        "id": "005514514", 
        "is_domestic": true, 
        "latitude": 47.6008371398097, 
        "legacy_id": 2748, 
        "longitude": 21.2381220306724, 
        "name": "K\u00f3nya"
      }, 
      {
        "id": "005514977", 
        "is_domestic": true, 
        "latitude": 47.3233990972126, 
        "legacy_id": 2749, 
        "longitude": 21.6660944711659, 
        "name": "Kony\u00e1r"
      }, 
      {
        "id": "005514993", 
        "is_domestic": true, 
        "latitude": 47.3239569966248, 
        "legacy_id": 2750, 
        "longitude": 21.7454490058458, 
        "name": "Kony\u00e1ri S\u00f3st\u00f3f\u00fcrd\u0151"
      }, 
      {
        "id": "005517426", 
        "is_domestic": true, 
        "latitude": 46.6950319506395, 
        "legacy_id": 2751, 
        "longitude": 20.0596219202745, 
        "name": "K\u00f3nyasz\u00e9k"
      }, 
      {
        "id": "004305165", 
        "is_domestic": true, 
        "latitude": 47.632691, 
        "legacy_id": 2754, 
        "longitude": 16.636881, 
        "name": "K\u00f3ph\u00e1za"
      }, 
      {
        "id": "007873160", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2758, 
        "longitude": null, 
        "name": "Koprivnica"
      }, 
      {
        "id": "005513342", 
        "is_domestic": true, 
        "latitude": 48.3646378259829, 
        "legacy_id": 2760, 
        "longitude": 21.2192051902859, 
        "name": "Korl\u00e1t-Vizsoly"
      }, 
      {
        "id": "005544503", 
        "is_domestic": true, 
        "latitude": 46.5640471782522, 
        "legacy_id": 2762, 
        "longitude": 20.2250820919564, 
        "name": "K\u00f3r\u00f3gyszentgy\u00f6rgy"
      }, 
      {
        "id": "005613600", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2768, 
        "longitude": null, 
        "name": "Kosice"
      }, 
      {
        "id": "005510157", 
        "is_domestic": true, 
        "latitude": 47.4829815896114, 
        "legacy_id": 2788, 
        "longitude": 19.1274406990349, 
        "name": "K\u0151b\u00e1nya als\u00f3"
      }, 
      {
        "id": "005510066", 
        "is_domestic": true, 
        "latitude": 47.4920682154262, 
        "legacy_id": 2789, 
        "longitude": 19.1339596652007, 
        "name": "K\u0151b\u00e1nya fels\u0151"
      }, 
      {
        "id": "005510173", 
        "is_domestic": true, 
        "latitude": 47.4636291731921, 
        "legacy_id": 2790, 
        "longitude": 19.1496258671471, 
        "name": "K\u0151b\u00e1nya-Kispest"
      }, 
      {
        "id": "005510173_197", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2792, 
        "longitude": null, 
        "name": "K\u00f6-Ki (K\u0151b\u00e1nya-Kispest)"
      }, 
      {
        "id": "005510173_198", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6763, 
        "longitude": null, 
        "name": "K\u00f6ki (K\u0151b\u00e1nya-Kispest)"
      }, 
      {
        "id": "004302287", 
        "is_domestic": true, 
        "latitude": 47.0159712249581, 
        "legacy_id": 2801, 
        "longitude": 16.5974622123513, 
        "name": "K\u00f6rmend"
      }, 
      {
        "id": "005501743", 
        "is_domestic": true, 
        "latitude": 47.5429412299691, 
        "legacy_id": 2803, 
        "longitude": 18.3335156076944, 
        "name": "K\u00f6rnye"
      }, 
      {
        "id": "007873107_199", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2804, 
        "longitude": null, 
        "name": "K\u00f6r\u00f6s (Krizevci)"
      }, 
      {
        "id": "005503400_200", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2805, 
        "longitude": null, 
        "name": "K\u0151r\u00f6shegy (Sz\u00e1nt\u00f3d-K\u0151r\u00f6shegy)"
      }, 
      {
        "id": "005518440", 
        "is_domestic": true, 
        "latitude": 46.9699163361525, 
        "legacy_id": 2806, 
        "longitude": 21.085877820386, 
        "name": "K\u00f6r\u00f6slad\u00e1ny"
      }, 
      {
        "id": "004305538", 
        "is_domestic": true, 
        "latitude": 47.3818001256018, 
        "legacy_id": 2808, 
        "longitude": 16.5565145990522, 
        "name": "K\u0151szeg"
      }, 
      {
        "id": "004346003", 
        "is_domestic": true, 
        "latitude": 47.3618401251878, 
        "legacy_id": 2809, 
        "longitude": 16.5674174059361, 
        "name": "K\u0151szegfalva"
      }, 
      {
        "id": "005518747", 
        "is_domestic": true, 
        "latitude": 46.7584102015301, 
        "legacy_id": 2810, 
        "longitude": 21.4795553068445, 
        "name": "K\u00f6tegy\u00e1n"
      }, 
      {
        "id": "005504473_201", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2813, 
        "longitude": null, 
        "name": "K\u00f6vesk\u00e1l (Z\u00e1nka-K\u00f6vesk\u00e1l)"
      }, 
      {
        "id": "005547555", 
        "is_domestic": true, 
        "latitude": 45.9959346095325, 
        "legacy_id": 2814, 
        "longitude": 18.6692094087494, 
        "name": "K\u00f6z\u00e9pmez\u0151"
      }, 
      {
        "id": "005505686", 
        "is_domestic": true, 
        "latitude": 45.9704264197959, 
        "legacy_id": 2815, 
        "longitude": 17.5248155320856, 
        "name": "K\u00f6z\u00e9prig\u00f3c"
      }, 
      {
        "id": "005549445_202", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6824, 
        "longitude": null, 
        "name": "K\u00f6zponti F\u0151major (Imremajor)"
      }, 
      {
        "id": "005506205_203", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6675, 
        "longitude": null, 
        "name": "K.pula (Kapospula)"
      }, 
      {
        "id": "005108031_204", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2817, 
        "longitude": null, 
        "name": "Krakau (KRAKOW*)"
      }, 
      {
        "id": "005108031_205", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2818, 
        "longitude": null, 
        "name": "Krakk\u00f3 (KRAKOW*)"
      }, 
      {
        "id": "005108031", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2819, 
        "longitude": null, 
        "name": "KRAKOW*"
      }, 
      {
        "id": "005108041", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2822, 
        "longitude": null, 
        "name": "Krakow Glowny"
      }, 
      {
        "id": "007873107", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2860, 
        "longitude": null, 
        "name": "Krizevci"
      }, 
      {
        "id": "005507187_206", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6825, 
        "longitude": null, 
        "name": "K.szekcs\u0151 (Kaposszekcs\u0151)"
      }, 
      {
        "id": "005506270_207", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6753, 
        "longitude": null, 
        "name": "K.szentjakab (Kaposszentjakab)"
      }, 
      {
        "id": "005508417_208", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6684, 
        "longitude": null, 
        "name": "K.t\u00fcskev\u00e1r (Kapost\u00fcskev\u00e1r)"
      }, 
      {
        "id": "008102184", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2876, 
        "longitude": null, 
        "name": "Kufstein"
      }, 
      {
        "id": "005506296_209", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6686, 
        "longitude": null, 
        "name": "K.\u00fajlak (Kapos\u00fajlak)"
      }, 
      {
        "id": "005506478", 
        "is_domestic": true, 
        "latitude": 47.0511252396181, 
        "legacy_id": 2878, 
        "longitude": 18.8977424097161, 
        "name": "Kulcs"
      }, 
      {
        "id": "005516584", 
        "is_domestic": true, 
        "latitude": 46.3559549783142, 
        "legacy_id": 2881, 
        "longitude": 19.4170487469703, 
        "name": "Kunfeh\u00e9rt\u00f3"
      }, 
      {
        "id": "005518127", 
        "is_domestic": true, 
        "latitude": 46.908258860443, 
        "legacy_id": 2882, 
        "longitude": 20.2677610311256, 
        "name": "Kungyalu"
      }, 
      {
        "id": "005512344", 
        "is_domestic": true, 
        "latitude": 47.3764017070016, 
        "legacy_id": 2883, 
        "longitude": 20.6408454145068, 
        "name": "Kunhegyes"
      }, 
      {
        "id": "005514233", 
        "is_domestic": true, 
        "latitude": 47.415362355489, 
        "legacy_id": 2884, 
        "longitude": 20.7931453742807, 
        "name": "Kunmadaras"
      }, 
      {
        "id": "005544552", 
        "is_domestic": true, 
        "latitude": 46.7809323622927, 
        "legacy_id": 2885, 
        "longitude": 19.76842817605, 
        "name": "Kunsz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005518135", 
        "is_domestic": true, 
        "latitude": 46.848281678634, 
        "legacy_id": 2886, 
        "longitude": 20.2931037775884, 
        "name": "Kunszentm\u00e1rton"
      }, 
      {
        "id": "005516204", 
        "is_domestic": true, 
        "latitude": 47.0183888041867, 
        "legacy_id": 2887, 
        "longitude": 19.1001011931191, 
        "name": "Kunszentmikl\u00f3s-Tass"
      }, 
      {
        "id": "005506163", 
        "is_domestic": true, 
        "latitude": 46.4502279847909, 
        "legacy_id": 2889, 
        "longitude": 18.3182873807495, 
        "name": "Kurd"
      }, 
      {
        "id": "005506346", 
        "is_domestic": true, 
        "latitude": 46.3260354648586, 
        "legacy_id": 2890, 
        "longitude": 17.4532117494437, 
        "name": "Kutas"
      }, 
      {
        "id": "005518580", 
        "is_domestic": true, 
        "latitude": 46.4595057297435, 
        "legacy_id": 2893, 
        "longitude": 20.4520145801154, 
        "name": "K\u00fatv\u00f6lgy"
      }, 
      {
        "id": "005613016", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2894, 
        "longitude": null, 
        "name": "Kuty"
      }, 
      {
        "id": "005502162", 
        "is_domestic": true, 
        "latitude": 47.2801608694869, 
        "legacy_id": 2897, 
        "longitude": 17.2217048663003, 
        "name": "K\u00fcls\u0151vat"
      }, 
      {
        "id": "005321925_210", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2898, 
        "longitude": null, 
        "name": "K\u00fcrt\u00f6s (Curtici)"
      }, 
      {
        "id": "005506288_211", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6706, 
        "longitude": null, 
        "name": "K.v\u00e1r (Kaposv\u00e1r)"
      }, 
      {
        "id": "005501578", 
        "is_domestic": true, 
        "latitude": 47.7520426860182, 
        "legacy_id": 2905, 
        "longitude": 18.5149553705129, 
        "name": "L\u00e1batlan"
      }, 
      {
        "id": "005504564_212", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2906, 
        "longitude": null, 
        "name": "L\u00e1bdihegy (Badacsonyl\u00e1bdihegy)"
      }, 
      {
        "id": "005516915", 
        "is_domestic": true, 
        "latitude": 47.0283893979425, 
        "legacy_id": 2924, 
        "longitude": 19.5425589188601, 
        "name": "Lajosmizse"
      }, 
      {
        "id": "005516923", 
        "is_domestic": true, 
        "latitude": 47.0227789778014, 
        "legacy_id": 2925, 
        "longitude": 19.5501611670235, 
        "name": "Lajosmizse als\u00f3"
      }, 
      {
        "id": "005517285", 
        "is_domestic": true, 
        "latitude": 46.8729659147172, 
        "legacy_id": 2929, 
        "longitude": 20.0033740851769, 
        "name": "Lakitelek"
      }, 
      {
        "id": "008101212", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2933, 
        "longitude": null, 
        "name": "Landeck - Zams"
      }, 
      {
        "id": "007943002", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2954, 
        "longitude": null, 
        "name": "Lasko"
      }, 
      {
        "id": "008103495", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2956, 
        "longitude": null, 
        "name": "Lassnitzh\u00f6he"
      }, 
      {
        "id": "008103496", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2957, 
        "longitude": null, 
        "name": "Lassnitzthal"
      }, 
      {
        "id": "002238376", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6717, 
        "longitude": null, 
        "name": "Lavochne"
      }, 
      {
        "id": "005501487", 
        "is_domestic": true, 
        "latitude": 47.6878745394491, 
        "legacy_id": 2976, 
        "longitude": 18.7719493358516, 
        "name": "Le\u00e1nyv\u00e1r"
      }, 
      {
        "id": "005501321", 
        "is_domestic": true, 
        "latitude": 47.7556876192783, 
        "legacy_id": 2977, 
        "longitude": 17.4252956780891, 
        "name": "L\u00e9b\u00e9ny-Mosonszentmikl\u00f3s"
      }, 
      {
        "id": "005503459_213", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2992, 
        "longitude": null, 
        "name": "Lelle (Balatonlelle)"
      }, 
      {
        "id": "005503442_214", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 2993, 
        "longitude": null, 
        "name": "Lelle fels\u0151 (Balatonlelle fels\u0151)"
      }, 
      {
        "id": "002237000_215", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 2994, 
        "longitude": null, 
        "name": "Lemberg (Lviv)"
      }, 
      {
        "id": "005508508", 
        "is_domestic": true, 
        "latitude": 46.6607111250743, 
        "legacy_id": 3000, 
        "longitude": 17.6133441990529, 
        "name": "Lengyelt\u00f3ti"
      }, 
      {
        "id": "005504986", 
        "is_domestic": true, 
        "latitude": 46.6212693161968, 
        "legacy_id": 3001, 
        "longitude": 16.5295998327574, 
        "name": "Lenti"
      }, 
      {
        "id": "005545898", 
        "is_domestic": true, 
        "latitude": 46.611088414154, 
        "legacy_id": 3002, 
        "longitude": 16.572616252148, 
        "name": "Lentiszombathely"
      }, 
      {
        "id": "007873103", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3019, 
        "longitude": null, 
        "name": "Lepavina"
      }, 
      {
        "id": "005503301", 
        "is_domestic": true, 
        "latitude": 46.9873576912661, 
        "legacy_id": 3021, 
        "longitude": 18.2473300739314, 
        "name": "Leps\u00e9ny"
      }, 
      {
        "id": "005335469", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3023, 
        "longitude": null, 
        "name": "Les Bihor"
      }, 
      {
        "id": "005434725", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 9996, 
        "longitude": null, 
        "name": "Letovice"
      }, 
      {
        "id": "005501354", 
        "is_domestic": true, 
        "latitude": 47.8898386562261, 
        "legacy_id": 3037, 
        "longitude": 17.1921656264746, 
        "name": "Lev\u00e9l"
      }, 
      {
        "id": "005515677", 
        "is_domestic": true, 
        "latitude": 47.9479627907175, 
        "legacy_id": 3038, 
        "longitude": 21.9936574800341, 
        "name": "Levelek-Magy"
      }, 
      {
        "id": "005515693", 
        "is_domestic": true, 
        "latitude": 47.9516054524724, 
        "legacy_id": 3060, 
        "longitude": 22.07124702724, 
        "name": "Ligettanya"
      }, 
      {
        "id": "008101073", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3075, 
        "longitude": null, 
        "name": "Linz Hbf"
      }, 
      {
        "id": "007943703", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3085, 
        "longitude": null, 
        "name": "Lipovci"
      }, 
      {
        "id": "007942207", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3096, 
        "longitude": null, 
        "name": "Litija"
      }, 
      {
        "id": "005511049", 
        "is_domestic": true, 
        "latitude": 48.2158071804881, 
        "legacy_id": 3097, 
        "longitude": 19.5988254329071, 
        "name": "Litke"
      }, 
      {
        "id": "007942300", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3103, 
        "longitude": null, 
        "name": "Ljubljana"
      }, 
      {
        "id": "007943605", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3116, 
        "longitude": null, 
        "name": "Ljutomer Mesto"
      }, 
      {
        "id": "008103504", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3141, 
        "longitude": null, 
        "name": "L\u00f6dersdorf"
      }, 
      {
        "id": "005518069", 
        "is_domestic": true, 
        "latitude": 46.4319320700542, 
        "legacy_id": 3142, 
        "longitude": 21.2377899813585, 
        "name": "L\u0151k\u00f6sh\u00e1za"
      }, 
      {
        "id": "005511742", 
        "is_domestic": true, 
        "latitude": 47.7373870622591, 
        "legacy_id": 3143, 
        "longitude": 19.6740507595957, 
        "name": "L\u0151rinci"
      }, 
      {
        "id": "004305207", 
        "is_domestic": true, 
        "latitude": 47.5095728484267, 
        "legacy_id": 3144, 
        "longitude": 16.7771549947982, 
        "name": "L\u00f6v\u0151"
      }, 
      {
        "id": "005511015", 
        "is_domestic": true, 
        "latitude": 48.1324502979466, 
        "legacy_id": 3155, 
        "longitude": 19.5293533491729, 
        "name": "Lud\u00e1nyhal\u00e1szi"
      }, 
      {
        "id": "005511262", 
        "is_domestic": true, 
        "latitude": 47.7241431894983, 
        "legacy_id": 3156, 
        "longitude": 20.0957128470473, 
        "name": "Ludas"
      }, 
      {
        "id": "005342814", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3160, 
        "longitude": null, 
        "name": "Ludus"
      }, 
      {
        "id": "008027327", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3163, 
        "longitude": null, 
        "name": "Ludwigslust"
      }, 
      {
        "id": "005311695", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3164, 
        "longitude": null, 
        "name": "Lugoj"
      }, 
      {
        "id": "004305520", 
        "is_domestic": true, 
        "latitude": 47.3407381187378, 
        "legacy_id": 3167, 
        "longitude": 16.5803734960516, 
        "name": "Luk\u00e1csh\u00e1za"
      }, 
      {
        "id": "004345997", 
        "is_domestic": true, 
        "latitude": 47.3266294707054, 
        "legacy_id": 3168, 
        "longitude": 16.5852179260434, 
        "name": "Luk\u00e1csh\u00e1za als\u00f3"
      }, 
      {
        "id": "002237000", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3197, 
        "longitude": null, 
        "name": "Lviv"
      }, 
      {
        "id": "007943774", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3206, 
        "longitude": null, 
        "name": "Mackovci"
      }, 
      {
        "id": "005513268", 
        "is_domestic": true, 
        "latitude": 48.1900231751954, 
        "legacy_id": 3209, 
        "longitude": 21.2689007277708, 
        "name": "M\u00e1d"
      }, 
      {
        "id": "005340402_216", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3212, 
        "longitude": null, 
        "name": "Mad\u00e9falva (Siculeni)"
      }, 
      {
        "id": "005501457", 
        "is_domestic": true, 
        "latitude": 47.6478262616051, 
        "legacy_id": 3216, 
        "longitude": 18.8184219064027, 
        "name": "Magdolnav\u00f6lgy"
      }, 
      {
        "id": "005511551", 
        "is_domestic": true, 
        "latitude": 47.4389588131176, 
        "legacy_id": 3220, 
        "longitude": 19.3407159930456, 
        "name": "Magl\u00f3d"
      }, 
      {
        "id": "005511569", 
        "is_domestic": true, 
        "latitude": 47.4342492872503, 
        "legacy_id": 3221, 
        "longitude": 19.3634899644815, 
        "name": "Magl\u00f3di nyaral\u00f3"
      }, 
      {
        "id": "005507021", 
        "is_domestic": true, 
        "latitude": 46.3103747377495, 
        "legacy_id": 3222, 
        "longitude": 18.2223298008154, 
        "name": "M\u00e1gocs-Als\u00f3mocsol\u00e1d"
      }, 
      {
        "id": "005515677_217", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3224, 
        "longitude": null, 
        "name": "Magy (Levelek-Magy)"
      }, 
      {
        "id": "005519273", 
        "is_domestic": true, 
        "latitude": 46.4509665635031, 
        "legacy_id": 3225, 
        "longitude": 20.9691833264553, 
        "name": "Magyarb\u00e1nhegyes"
      }, 
      {
        "id": "005507476", 
        "is_domestic": true, 
        "latitude": 45.8348214500412, 
        "legacy_id": 3226, 
        "longitude": 18.4910133937697, 
        "name": "Magyarb\u00f3ly"
      }, 
      {
        "id": "005519125", 
        "is_domestic": true, 
        "latitude": 46.1744844181683, 
        "legacy_id": 3227, 
        "longitude": 20.6104818265243, 
        "name": "Magyarcsan\u00e1d"
      }, 
      {
        "id": "005507492", 
        "is_domestic": true, 
        "latitude": 46.193004719875, 
        "legacy_id": 3228, 
        "longitude": 18.1565282493986, 
        "name": "Magyarhertelend"
      }, 
      {
        "id": "004302386", 
        "is_domestic": true, 
        "latitude": 47.5143636697224, 
        "legacy_id": 3229, 
        "longitude": 17.1760614576948, 
        "name": "Magyarkereszt\u00far-Zsebeh\u00e1za"
      }, 
      {
        "id": "005541186", 
        "is_domestic": true, 
        "latitude": 47.8489774373371, 
        "legacy_id": 3230, 
        "longitude": 19.0467600375691, 
        "name": "Magyark\u00fat"
      }, 
      {
        "id": "005510603", 
        "is_domestic": true, 
        "latitude": 47.8311935660399, 
        "legacy_id": 3231, 
        "longitude": 19.0401586718069, 
        "name": "Magyark\u00fat-Ver\u0151ce"
      }, 
      {
        "id": "005545534_218", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3232, 
        "longitude": null, 
        "name": "Magyarmecske (Gy\u00f6ngyfa-Magyarmecske)"
      }, 
      {
        "id": "005510934", 
        "is_domestic": true, 
        "latitude": 47.9707865921295, 
        "legacy_id": 3233, 
        "longitude": 19.3567370989051, 
        "name": "Magyarn\u00e1ndor"
      }, 
      {
        "id": "005507500", 
        "is_domestic": true, 
        "latitude": 46.210340697341, 
        "legacy_id": 3234, 
        "longitude": 18.1860047677256, 
        "name": "Magyarsz\u00e9k"
      }, 
      {
        "id": "007873106", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3238, 
        "longitude": null, 
        "name": "Majurec"
      }, 
      {
        "id": "005512377", 
        "is_domestic": true, 
        "latitude": 47.8078473816443, 
        "legacy_id": 3239, 
        "longitude": 20.4048897298989, 
        "name": "Makl\u00e1r"
      }, 
      {
        "id": "005519109", 
        "is_domestic": true, 
        "latitude": 46.2047363310448, 
        "legacy_id": 3240, 
        "longitude": 20.4745526399743, 
        "name": "Mak\u00f3"
      }, 
      {
        "id": "007872405", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3245, 
        "longitude": null, 
        "name": "Maksimir"
      }, 
      {
        "id": "005515875", 
        "is_domestic": true, 
        "latitude": 48.327165534434, 
        "legacy_id": 3269, 
        "longitude": 22.1961780167518, 
        "name": "M\u00e1ndok"
      }, 
      {
        "id": "008014008", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3272, 
        "longitude": null, 
        "name": "Mannheim Hbf"
      }, 
      {
        "id": "005503061", 
        "is_domestic": true, 
        "latitude": 47.427778004074, 
        "legacy_id": 3279, 
        "longitude": 17.3490453439532, 
        "name": "Marcalt\u0151"
      }, 
      {
        "id": "005511148", 
        "is_domestic": true, 
        "latitude": 47.5957629293082, 
        "legacy_id": 3295, 
        "longitude": 19.3895046114301, 
        "name": "M\u00e1riabesny\u0151"
      }, 
      {
        "id": "005503541_219", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3296, 
        "longitude": null, 
        "name": "M\u00e1riaf\u00fcrd\u0151 (Balatonm\u00e1riaf\u00fcrd\u0151)"
      }, 
      {
        "id": "005503533_220", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3297, 
        "longitude": null, 
        "name": "M\u00e1riaf\u00fcrd\u0151 als\u00f3 (M\u00e1riahull\u00e1mtelep)"
      }, 
      {
        "id": "005503533", 
        "is_domestic": true, 
        "latitude": 46.7048426413086, 
        "legacy_id": 343, 
        "longitude": 17.4349465470636, 
        "name": "M\u00e1riahull\u00e1mtelep"
      }, 
      {
        "id": "005515446", 
        "is_domestic": true, 
        "latitude": 47.8527556881984, 
        "legacy_id": 3299, 
        "longitude": 22.0191287668011, 
        "name": "M\u00e1riap\u00f3cs"
      }, 
      {
        "id": "005321705_221", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3300, 
        "longitude": null, 
        "name": "M\u00e1riaradna (Radna)"
      }, 
      {
        "id": "005503534", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 13852, 
        "longitude": null, 
        "name": "M\u00e1riasz\u0151l\u0151telep"
      }, 
      {
        "id": "005541012", 
        "is_domestic": true, 
        "latitude": 47.7527125784669, 
        "legacy_id": 3302, 
        "longitude": 19.1635610966241, 
        "name": "M\u00e1riaudvar"
      }, 
      {
        "id": "005516964_222", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6752, 
        "longitude": null, 
        "name": "M\u00e1riav\u00e1ros (Kecskem\u00e9t-M\u00e1riav\u00e1ros)"
      }, 
      {
        "id": "005545781", 
        "is_domestic": true, 
        "latitude": 47.1268952009423, 
        "legacy_id": 3312, 
        "longitude": 17.8107057700847, 
        "name": "M\u00e1rk\u00f3"
      }, 
      {
        "id": "005345294", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3319, 
        "longitude": null, 
        "name": "Marna"
      }, 
      {
        "id": "005545435", 
        "is_domestic": true, 
        "latitude": 45.8866438246356, 
        "legacy_id": 3321, 
        "longitude": 18.4992330494334, 
        "name": "M\u00e1rok"
      }, 
      {
        "id": "005340684_223", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3322, 
        "longitude": null, 
        "name": "Marosh\u00e9v\u00edz (Toplita)"
      }, 
      {
        "id": "005321406_224", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3323, 
        "longitude": null, 
        "name": "Marosillye (Ilia)"
      }, 
      {
        "id": "005342814_225", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3324, 
        "longitude": null, 
        "name": "Marosludas (Ludus)"
      }, 
      {
        "id": "005342606_226", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6830, 
        "longitude": null, 
        "name": "Marosv\u00e1s\u00e1rhely (T\u00e2rgu Mure\u015f)"
      }, 
      {
        "id": "005518226", 
        "is_domestic": true, 
        "latitude": 46.4733400853708, 
        "legacy_id": 3328, 
        "longitude": 20.2359069246006, 
        "name": "M\u00e1rt\u00e9ly"
      }, 
      {
        "id": "005518093", 
        "is_domestic": true, 
        "latitude": 47.0209504137488, 
        "legacy_id": 3329, 
        "longitude": 20.2918364777377, 
        "name": "Martf\u0171"
      }, 
      {
        "id": "005503178", 
        "is_domestic": true, 
        "latitude": 47.3205685532869, 
        "legacy_id": 3333, 
        "longitude": 18.7813338908372, 
        "name": "Martonv\u00e1s\u00e1r"
      }, 
      {
        "id": "005515495", 
        "is_domestic": true, 
        "latitude": 47.9517283672977, 
        "legacy_id": 3340, 
        "longitude": 22.3129760817213, 
        "name": "M\u00e1t\u00e9szalka"
      }, 
      {
        "id": "005511817", 
        "is_domestic": true, 
        "latitude": 47.9389867302915, 
        "legacy_id": 3341, 
        "longitude": 19.7067933174046, 
        "name": "M\u00e1trasz\u0151l\u0151s-Hasznos"
      }, 
      {
        "id": "005511833", 
        "is_domestic": true, 
        "latitude": 47.9685244080236, 
        "legacy_id": 3342, 
        "longitude": 19.7808716959776, 
        "name": "M\u00e1travereb\u00e9ly"
      }, 
      {
        "id": "005511734", 
        "is_domestic": true, 
        "latitude": 47.7196632254449, 
        "legacy_id": 3343, 
        "longitude": 19.6741446167369, 
        "name": "M\u00e1travid\u00e9ki Er\u0151m\u0171"
      }, 
      {
        "id": "007943774_227", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3350, 
        "longitude": null, 
        "name": "M\u00e1ty\u00e1sdomb (Mackovci)"
      }, 
      {
        "id": "005507054", 
        "is_domestic": true, 
        "latitude": 46.2791952348593, 
        "legacy_id": 3356, 
        "longitude": 18.4087002855226, 
        "name": "M\u00e1za-Sz\u00e1szv\u00e1r"
      }, 
      {
        "id": "005507286", 
        "is_domestic": true, 
        "latitude": 46.0600732666595, 
        "legacy_id": 3358, 
        "longitude": 18.152088053948, 
        "name": "Mecsekalja-Cserk\u00fat"
      }, 
      {
        "id": "005507526", 
        "is_domestic": true, 
        "latitude": 46.2163546373444, 
        "legacy_id": 3359, 
        "longitude": 18.2420910097723, 
        "name": "Mecsekj\u00e1nosi"
      }, 
      {
        "id": "005507518", 
        "is_domestic": true, 
        "latitude": 46.2242677052992, 
        "legacy_id": 3360, 
        "longitude": 18.2134771790036, 
        "name": "Mecsekp\u00f6l\u00f6ske"
      }, 
      {
        "id": "005519281", 
        "is_domestic": true, 
        "latitude": 46.4964040895577, 
        "legacy_id": 3363, 
        "longitude": 21.0307241450559, 
        "name": "Medgyesegyh\u00e1za"
      }, 
      {
        "id": "005331334", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6722, 
        "longitude": null, 
        "name": "Media\u015f"
      }, 
      {
        "id": "005341860", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3365, 
        "longitude": null, 
        "name": "Mediesu Aurit"
      }, 
      {
        "id": "005518994_228", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6844, 
        "longitude": null, 
        "name": "Meg\u00e1ll\u00f3 (Kiszombor meg\u00e1ll\u00f3)"
      }, 
      {
        "id": "005511965", 
        "is_domestic": true, 
        "latitude": 47.4412389653058, 
        "legacy_id": 3373, 
        "longitude": 19.9394621995197, 
        "name": "Meggyespele"
      }, 
      {
        "id": "005545864_229", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6619, 
        "longitude": null, 
        "name": "Megyer (Rig\u00e1cs)"
      }, 
      {
        "id": "005518762", 
        "is_domestic": true, 
        "latitude": 46.7742971621553, 
        "legacy_id": 3376, 
        "longitude": 21.4554554945912, 
        "name": "M\u00e9hker\u00e9k"
      }, 
      {
        "id": "005516626", 
        "is_domestic": true, 
        "latitude": 46.2128445024799, 
        "legacy_id": 3381, 
        "longitude": 19.3707145128071, 
        "name": "M\u00e9lyk\u00fat"
      }, 
      {
        "id": "005511585", 
        "is_domestic": true, 
        "latitude": 47.4268629444427, 
        "legacy_id": 3383, 
        "longitude": 19.4399236055551, 
        "name": "Mende"
      }, 
      {
        "id": "005502048", 
        "is_domestic": true, 
        "latitude": 47.6217055213778, 
        "legacy_id": 3384, 
        "longitude": 17.5990560520667, 
        "name": "M\u00e9nf\u0151csanak"
      }, 
      {
        "id": "005502030", 
        "is_domestic": true, 
        "latitude": 47.6375842300553, 
        "legacy_id": 3385, 
        "longitude": 17.6142202366921, 
        "name": "M\u00e9nf\u0151csanak fels\u0151"
      }, 
      {
        "id": "005516949", 
        "is_domestic": true, 
        "latitude": 46.9787145963465, 
        "legacy_id": 3386, 
        "longitude": 19.5706800645208, 
        "name": "M\u00e9ntelek"
      }, 
      {
        "id": "005513201", 
        "is_domestic": true, 
        "latitude": 48.3631052240168, 
        "legacy_id": 3391, 
        "longitude": 21.1403045707588, 
        "name": "M\u00e9ra"
      }, 
      {
        "id": "005508268", 
        "is_domestic": true, 
        "latitude": 46.5094860568168, 
        "legacy_id": 3395, 
        "longitude": 17.8320217974534, 
        "name": "Mernye"
      }, 
      {
        "id": "005517889", 
        "is_domestic": true, 
        "latitude": 46.814815113318, 
        "legacy_id": 3404, 
        "longitude": 21.0130809927502, 
        "name": "Mez\u0151ber\u00e9ny"
      }, 
      {
        "id": "005506536", 
        "is_domestic": true, 
        "latitude": 46.9054193131997, 
        "legacy_id": 3405, 
        "longitude": 18.8103488709639, 
        "name": "Mez\u0151falva"
      }, 
      {
        "id": "005519166", 
        "is_domestic": true, 
        "latitude": 46.3109763991387, 
        "legacy_id": 3406, 
        "longitude": 20.816030743767, 
        "name": "Mez\u0151hegyes"
      }, 
      {
        "id": "005511338", 
        "is_domestic": true, 
        "latitude": 47.8455920557888, 
        "legacy_id": 3407, 
        "longitude": 20.6702479612738, 
        "name": "Mez\u0151keresztes-Mez\u0151ny\u00e1r\u00e1d"
      }, 
      {
        "id": "005519182", 
        "is_domestic": true, 
        "latitude": 46.4079043408505, 
        "legacy_id": 3408, 
        "longitude": 20.8999841729774, 
        "name": "Mez\u0151kov\u00e1csh\u00e1za"
      }, 
      {
        "id": "005519208", 
        "is_domestic": true, 
        "latitude": 46.4157441799367, 
        "legacy_id": 3409, 
        "longitude": 20.9192387992021, 
        "name": "Mez\u0151kov\u00e1csh\u00e1za fels\u0151"
      }, 
      {
        "id": "005511312", 
        "is_domestic": true, 
        "latitude": 47.7971508963955, 
        "legacy_id": 3410, 
        "longitude": 20.5670289631969, 
        "name": "Mez\u0151k\u00f6vesd"
      }, 
      {
        "id": "005511320", 
        "is_domestic": true, 
        "latitude": 47.8063772849997, 
        "legacy_id": 3411, 
        "longitude": 20.5898704674258, 
        "name": "Mez\u0151k\u00f6vesd fels\u0151"
      }, 
      {
        "id": "005502139", 
        "is_domestic": true, 
        "latitude": 47.3236787041274, 
        "legacy_id": 3413, 
        "longitude": 17.3641607072015, 
        "name": "Mez\u0151lak"
      }, 
      {
        "id": "005511338_230", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3414, 
        "longitude": null, 
        "name": "Mez\u0151ny\u00e1r\u00e1d (Mez\u0151keresztes-Mez\u0151ny\u00e1r\u00e1d)"
      }, 
      {
        "id": "005514431", 
        "is_domestic": true, 
        "latitude": 47.1760108783343, 
        "legacy_id": 3415, 
        "longitude": 21.6257653253836, 
        "name": "Mez\u0151peterd"
      }, 
      {
        "id": "005514605", 
        "is_domestic": true, 
        "latitude": 47.7249138602266, 
        "legacy_id": 3416, 
        "longitude": 20.4804526428943, 
        "name": "Mez\u0151t\u00e1rk\u00e1ny"
      }, 
      {
        "id": "005517848", 
        "is_domestic": true, 
        "latitude": 47.0133719960847, 
        "legacy_id": 3417, 
        "longitude": 20.6191673950061, 
        "name": "Mez\u0151t\u00far"
      }, 
      {
        "id": "005511452", 
        "is_domestic": true, 
        "latitude": 48.15681344208, 
        "legacy_id": 3418, 
        "longitude": 21.2673221357123, 
        "name": "Mez\u0151zombor"
      }, 
      {
        "id": "005107946", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3432, 
        "longitude": null, 
        "name": "Miechow"
      }, 
      {
        "id": "005340373", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3434, 
        "longitude": null, 
        "name": "Miercurea Ciuc"
      }, 
      {
        "id": "005502147", 
        "is_domestic": true, 
        "latitude": 47.3184094101483, 
        "legacy_id": 3442, 
        "longitude": 17.3292744616266, 
        "name": "Mih\u00e1lyh\u00e1za"
      }, 
      {
        "id": "008102979_231", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3444, 
        "longitude": null, 
        "name": "Mikl\u00f3shalma (Nickelsdorf)"
      }, 
      {
        "id": "005544719", 
        "is_domestic": true, 
        "latitude": 46.9132999713061, 
        "legacy_id": 3445, 
        "longitude": 19.6308579666786, 
        "name": "Mikl\u00f3stelep"
      }, 
      {
        "id": "005518218", 
        "is_domestic": true, 
        "latitude": 46.523933782189, 
        "legacy_id": 3455, 
        "longitude": 20.1938379586876, 
        "name": "Mindszent"
      }, 
      {
        "id": "005590998", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3471, 
        "longitude": null, 
        "name": "MISKOLC*"
      }, 
      {
        "id": "005512674", 
        "is_domestic": true, 
        "latitude": 48.1062044153132, 
        "legacy_id": 3472, 
        "longitude": 20.8003292097991, 
        "name": "Miskolc-G\u00f6m\u00f6ri"
      }, 
      {
        "id": "005511387", 
        "is_domestic": true, 
        "latitude": 48.0986960330878, 
        "legacy_id": 3473, 
        "longitude": 20.8090989702611, 
        "name": "Miskolc-Tiszai"
      }, 
      {
        "id": "005345361", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3496, 
        "longitude": null, 
        "name": "Moftin"
      }, 
      {
        "id": "005507781", 
        "is_domestic": true, 
        "latitude": 46.0024027911826, 
        "legacy_id": 3501, 
        "longitude": 18.6841669812885, 
        "name": "Moh\u00e1cs"
      }, 
      {
        "id": "005510942", 
        "is_domestic": true, 
        "latitude": 47.9967124235661, 
        "legacy_id": 3502, 
        "longitude": 19.3463527754167, 
        "name": "Mohora"
      }, 
      {
        "id": "005505728", 
        "is_domestic": true, 
        "latitude": 46.035081384779, 
        "legacy_id": 3510, 
        "longitude": 17.7480177985612, 
        "name": "Molv\u00e1ny"
      }, 
      {
        "id": "005513664", 
        "is_domestic": true, 
        "latitude": 47.3454243287785, 
        "legacy_id": 3513, 
        "longitude": 19.4371961009638, 
        "name": "Monor"
      }, 
      {
        "id": "005541277", 
        "is_domestic": true, 
        "latitude": 47.3084775404263, 
        "legacy_id": 3515, 
        "longitude": 19.4996670740157, 
        "name": "Monorierd\u0151"
      }, 
      {
        "id": "005512450", 
        "is_domestic": true, 
        "latitude": 48.0320091969392, 
        "legacy_id": 3516, 
        "longitude": 20.32999314425, 
        "name": "M\u00f3nosb\u00e9l"
      }, 
      {
        "id": "005503731", 
        "is_domestic": true, 
        "latitude": 47.3695519867337, 
        "legacy_id": 3522, 
        "longitude": 18.1888137182889, 
        "name": "M\u00f3r"
      }, 
      {
        "id": "005501347", 
        "is_domestic": true, 
        "latitude": 47.8506539658098, 
        "legacy_id": 3538, 
        "longitude": 17.266313003256, 
        "name": "Mosonmagyar\u00f3v\u00e1r"
      }, 
      {
        "id": "008103026_232", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7329, 
        "longitude": null, 
        "name": "Mosonszentandr\u00e1s (St. Andr\u00e4 am Zicksee)"
      }, 
      {
        "id": "005501321_233", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3540, 
        "longitude": null, 
        "name": "Mosonszentmikl\u00f3s (L\u00e9b\u00e9ny-Mosonszentmikl\u00f3s)"
      }, 
      {
        "id": "004302337", 
        "is_domestic": true, 
        "latitude": 47.8525902461672, 
        "legacy_id": 3541, 
        "longitude": 17.1607516075184, 
        "name": "Mosonszolnok"
      }, 
      {
        "id": "005507104", 
        "is_domestic": true, 
        "latitude": 46.2571260173233, 
        "legacy_id": 3553, 
        "longitude": 18.5945805211372, 
        "name": "M\u0151cs\u00e9ny"
      }, 
      {
        "id": "008103024", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7328, 
        "longitude": null, 
        "name": "M\u00f6nchhof-Halbturn [\u00d6BB]"
      }, 
      {
        "id": "005506742_234", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3561, 
        "longitude": null, 
        "name": "M\u00f6zs (Tolna-M\u00f6zs)"
      }, 
      {
        "id": "007873101", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3563, 
        "longitude": null, 
        "name": "Mucna Reka"
      }, 
      {
        "id": "002238000", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3565, 
        "longitude": null, 
        "name": "Mukachevo"
      }, 
      {
        "id": "002238000_235", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3570, 
        "longitude": null, 
        "name": "Munk\u00e1cs (Mukachevo)"
      }, 
      {
        "id": "005503640", 
        "is_domestic": true, 
        "latitude": 46.3636940140233, 
        "legacy_id": 3573, 
        "longitude": 16.8768059508942, 
        "name": "Murakereszt\u00far"
      }, 
      {
        "id": "007943704_236", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3575, 
        "longitude": null, 
        "name": "Muraszombat (Murska Sobota)"
      }, 
      {
        "id": "005517897", 
        "is_domestic": true, 
        "latitude": 46.7570358764351, 
        "legacy_id": 3583, 
        "longitude": 21.0378745118735, 
        "name": "Murony"
      }, 
      {
        "id": "007943704", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3584, 
        "longitude": null, 
        "name": "Murska Sobota"
      }, 
      {
        "id": "004333213", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3597, 
        "longitude": null, 
        "name": "M\u00fcllendorf"
      }, 
      {
        "id": "008020350", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3599, 
        "longitude": null, 
        "name": "M\u00dcNCHEN*"
      }, 
      {
        "id": "008020347", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7598, 
        "longitude": null, 
        "name": "M\u00fcnchen Hbf."
      }, 
      {
        "id": "008020234", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3603, 
        "longitude": null, 
        "name": "M\u00fcnchen Ost"
      }, 
      {
        "id": "008020286", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3605, 
        "longitude": null, 
        "name": "M\u00fcnchen-Pasing"
      }, 
      {
        "id": "005508631", 
        "is_domestic": true, 
        "latitude": 46.2284689658564, 
        "legacy_id": 3621, 
        "longitude": 17.3542488095909, 
        "name": "Nagyat\u00e1d"
      }, 
      {
        "id": "005506338_237", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3622, 
        "longitude": null, 
        "name": "Nagybajom (J\u00e1k\u00f3-Nagybajom)"
      }, 
      {
        "id": "005341638_238", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3623, 
        "longitude": null, 
        "name": "Nagyb\u00e1nya (Baia Mare)"
      }, 
      {
        "id": "005511841", 
        "is_domestic": true, 
        "latitude": 47.9798826151248, 
        "legacy_id": 3624, 
        "longitude": 19.8190806655746, 
        "name": "Nagyb\u00e1tony"
      }, 
      {
        "id": "005508375_239", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3625, 
        "longitude": null, 
        "name": "Nagyber\u00e9ny (Som-Nagyber\u00e9ny)"
      }, 
      {
        "id": "005506239", 
        "is_domestic": true, 
        "latitude": 46.3562033656316, 
        "legacy_id": 3626, 
        "longitude": 18.0077443788925, 
        "name": "Nagyberki"
      }, 
      {
        "id": "004305173", 
        "is_domestic": true, 
        "latitude": 47.6012456810746, 
        "legacy_id": 3628, 
        "longitude": 16.6902016677284, 
        "name": "Nagycenk"
      }, 
      {
        "id": "005515149", 
        "is_domestic": true, 
        "latitude": 47.523957052283, 
        "legacy_id": 3630, 
        "longitude": 21.7633505344445, 
        "name": "Nagycsere"
      }, 
      {
        "id": "005515958", 
        "is_domestic": true, 
        "latitude": 48.0541541115658, 
        "legacy_id": 3631, 
        "longitude": 22.3112107652681, 
        "name": "Nagydobos"
      }, 
      {
        "id": "005506684", 
        "is_domestic": true, 
        "latitude": 46.6153599212889, 
        "legacy_id": 3632, 
        "longitude": 18.6500868266645, 
        "name": "Nagydorog"
      }, 
      {
        "id": "005515982", 
        "is_domestic": true, 
        "latitude": 47.8648917635595, 
        "legacy_id": 3633, 
        "longitude": 22.3856523440457, 
        "name": "Nagyecsed"
      }, 
      {
        "id": "005518382", 
        "is_domestic": true, 
        "latitude": 46.3704411009306, 
        "legacy_id": 3635, 
        "longitude": 20.7374918318068, 
        "name": "Nagy\u00e9r"
      }, 
      {
        "id": "004302352_240", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3636, 
        "longitude": null, 
        "name": "Nagyerd\u0151 (Hans\u00e1g-Nagyerd\u0151)"
      }, 
      {
        "id": "005514498", 
        "is_domestic": true, 
        "latitude": 47.5812524055609, 
        "legacy_id": 3637, 
        "longitude": 21.4456488381174, 
        "name": "Nagyh\u00e1t"
      }, 
      {
        "id": "005503798", 
        "is_domestic": true, 
        "latitude": 47.6308250195239, 
        "legacy_id": 3638, 
        "longitude": 18.0508514305354, 
        "name": "Nagyigm\u00e1nd-B\u00e1bolna"
      }, 
      {
        "id": "005515420", 
        "is_domestic": true, 
        "latitude": 47.8709177299462, 
        "legacy_id": 3639, 
        "longitude": 21.8258072741437, 
        "name": "Nagyk\u00e1ll\u00f3"
      }, 
      {
        "id": "005503624", 
        "is_domestic": true, 
        "latitude": 46.4408430291126, 
        "legacy_id": 3640, 
        "longitude": 16.9867243039445, 
        "name": "Nagykanizsa"
      }, 
      {
        "id": "005505397", 
        "is_domestic": true, 
        "latitude": 46.832168573867, 
        "legacy_id": 3641, 
        "longitude": 16.9349911781856, 
        "name": "Nagykapornak"
      }, 
      {
        "id": "005506627", 
        "is_domestic": true, 
        "latitude": 46.8486051472224, 
        "legacy_id": 3642, 
        "longitude": 18.7652549222981, 
        "name": "Nagykar\u00e1csony"
      }, 
      {
        "id": "005506619", 
        "is_domestic": true, 
        "latitude": 46.865892483881, 
        "legacy_id": 3643, 
        "longitude": 18.7830197734601, 
        "name": "Nagykar\u00e1csony fels\u0151"
      }, 
      {
        "id": "005345323_241", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3644, 
        "longitude": null, 
        "name": "Nagyk\u00e1roly (Carei)"
      }, 
      {
        "id": "005511643", 
        "is_domestic": true, 
        "latitude": 47.4098743664065, 
        "legacy_id": 3645, 
        "longitude": 19.7376435267565, 
        "name": "Nagyk\u00e1ta"
      }, 
      {
        "id": "005515040", 
        "is_domestic": true, 
        "latitude": 47.1906143848052, 
        "legacy_id": 3646, 
        "longitude": 21.8003749972408, 
        "name": "Nagykereki"
      }, 
      {
        "id": "005517095", 
        "is_domestic": true, 
        "latitude": 47.0383872451442, 
        "legacy_id": 3648, 
        "longitude": 19.760390857032, 
        "name": "Nagyk\u0151r\u00f6s"
      }, 
      {
        "id": "005519133", 
        "is_domestic": true, 
        "latitude": 46.1700431353353, 
        "legacy_id": 3649, 
        "longitude": 20.7082639364372, 
        "name": "Nagylak"
      }, 
      {
        "id": "005519141", 
        "is_domestic": true, 
        "latitude": 46.1890389422177, 
        "legacy_id": 3650, 
        "longitude": 20.7175841138801, 
        "name": "Nagylaki Kendergy\u00e1r"
      }, 
      {
        "id": "005517855", 
        "is_domestic": true, 
        "latitude": 46.9747584662043, 
        "legacy_id": 3651, 
        "longitude": 20.7500211969467, 
        "name": "Nagylapos"
      }, 
      {
        "id": "005505918", 
        "is_domestic": true, 
        "latitude": 46.9793600485355, 
        "legacy_id": 3653, 
        "longitude": 18.6355747134101, 
        "name": "Nagyl\u00f3k"
      }, 
      {
        "id": "005507070", 
        "is_domestic": true, 
        "latitude": 46.2796409941384, 
        "legacy_id": 3654, 
        "longitude": 18.457032105217, 
        "name": "Nagym\u00e1nyok"
      }, 
      {
        "id": "005510488", 
        "is_domestic": true, 
        "latitude": 47.7801703781927, 
        "legacy_id": 3655, 
        "longitude": 18.9518602819633, 
        "name": "Nagymaros"
      }, 
      {
        "id": "005510470", 
        "is_domestic": true, 
        "latitude": 47.7910053523233, 
        "legacy_id": 3656, 
        "longitude": 18.9589464335162, 
        "name": "Nagymaros-Visegr\u00e1d"
      }, 
      {
        "id": "005545443", 
        "is_domestic": true, 
        "latitude": 45.9533568526039, 
        "legacy_id": 3659, 
        "longitude": 18.5650257902033, 
        "name": "Nagyny\u00e1r\u00e1d"
      }, 
      {
        "id": "005510660", 
        "is_domestic": true, 
        "latitude": 47.99391345196, 
        "legacy_id": 3660, 
        "longitude": 19.1007594334645, 
        "name": "Nagyoroszi"
      }, 
      {
        "id": "005505751", 
        "is_domestic": true, 
        "latitude": 46.0381558828162, 
        "legacy_id": 3661, 
        "longitude": 17.8979298503273, 
        "name": "Nagypeterd"
      }, 
      {
        "id": "005505066", 
        "is_domestic": true, 
        "latitude": 46.8271426586746, 
        "legacy_id": 3662, 
        "longitude": 16.4557075549784, 
        "name": "Nagyr\u00e1kos"
      }, 
      {
        "id": "005503616", 
        "is_domestic": true, 
        "latitude": 46.4637347663484, 
        "legacy_id": 3663, 
        "longitude": 17.0436906803765, 
        "name": "Nagyr\u00e9cse"
      }, 
      {
        "id": "005502196", 
        "is_domestic": true, 
        "latitude": 47.2656777533748, 
        "legacy_id": 3666, 
        "longitude": 17.0575693084223, 
        "name": "Nagysimonyi"
      }, 
      {
        "id": "005335407_242", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3668, 
        "longitude": null, 
        "name": "Nagyszalonta (Salonta)"
      }, 
      {
        "id": "005320658_243", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3669, 
        "longitude": null, 
        "name": "Nagyszeben (Sibiu)"
      }, 
      {
        "id": "005515784", 
        "is_domestic": true, 
        "latitude": 47.9757959050982, 
        "legacy_id": 3670, 
        "longitude": 22.6131352389633, 
        "name": "Nagyszekeres"
      }, 
      {
        "id": "005518317", 
        "is_domestic": true, 
        "latitude": 46.6728085226384, 
        "legacy_id": 3671, 
        "longitude": 20.674217686807, 
        "name": "Nagysz\u00e9n\u00e1s"
      }, 
      {
        "id": "005501248", 
        "is_domestic": true, 
        "latitude": 47.7056841812137, 
        "legacy_id": 3672, 
        "longitude": 17.8718979339421, 
        "name": "Nagyszentj\u00e1nos"
      }, 
      {
        "id": "005505793", 
        "is_domestic": true, 
        "latitude": 47.3981294808629, 
        "legacy_id": 3676, 
        "longitude": 18.973519744425, 
        "name": "Nagyt\u00e9t\u00e9ny-Di\u00f3sd"
      }, 
      {
        "id": "005503145_244", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3677, 
        "longitude": null, 
        "name": "Nagyt\u00e9t\u00e9ny-\u00c9rdliget (T\u00e9t\u00e9nyliget)"
      }, 
      {
        "id": "005518150", 
        "is_domestic": true, 
        "latitude": 46.7633446541132, 
        "legacy_id": 3678, 
        "longitude": 20.2915598319272, 
        "name": "Nagyt\u0151ke"
      }, 
      {
        "id": "005511270", 
        "is_domestic": true, 
        "latitude": 47.7264469869278, 
        "legacy_id": 3680, 
        "longitude": 20.1621385071768, 
        "name": "Nagy\u00fat"
      }, 
      {
        "id": "005332663_245", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3681, 
        "longitude": null, 
        "name": "Nagyv\u00e1rad (Oradea)"
      }, 
      {
        "id": "005515651", 
        "is_domestic": true, 
        "latitude": 47.9485335689012, 
        "legacy_id": 3688, 
        "longitude": 21.8732819532206, 
        "name": "Napkor"
      }, 
      {
        "id": "005545732", 
        "is_domestic": true, 
        "latitude": 47.4029448823889, 
        "legacy_id": 3705, 
        "longitude": 17.3763050854254, 
        "name": "Nemesg\u00f6rzs\u00f6ny"
      }, 
      {
        "id": "005504580", 
        "is_domestic": true, 
        "latitude": 46.8369179011441, 
        "legacy_id": 3706, 
        "longitude": 17.4764829343241, 
        "name": "Nemesgul\u00e1cs-Kisap\u00e1ti"
      }, 
      {
        "id": "005505710", 
        "is_domestic": true, 
        "latitude": 46.0235219855538, 
        "legacy_id": 3707, 
        "longitude": 17.707353755594, 
        "name": "Nemeske"
      }, 
      {
        "id": "005504697", 
        "is_domestic": true, 
        "latitude": 47.0937412783773, 
        "legacy_id": 3708, 
        "longitude": 17.1834714272565, 
        "name": "Nemeskereszt\u00far"
      }, 
      {
        "id": "005545807", 
        "is_domestic": true, 
        "latitude": 47.2038298746735, 
        "legacy_id": 3709, 
        "longitude": 17.1886334797718, 
        "name": "Nemeskocs"
      }, 
      {
        "id": "005501545", 
        "is_domestic": true, 
        "latitude": 47.7343069018169, 
        "legacy_id": 3718, 
        "longitude": 18.3452127846251, 
        "name": "Neszm\u00e9ly"
      }, 
      {
        "id": "008103005", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3721, 
        "longitude": null, 
        "name": "Neudorf(B. Parndorf)"
      }, 
      {
        "id": "008133212", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3725, 
        "longitude": null, 
        "name": "Neufeld A.D.Leitha (Roeee)"
      }, 
      {
        "id": "008103006", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3746, 
        "longitude": null, 
        "name": "Neusiedl am See"
      }, 
      {
        "id": "008103006_246", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3756, 
        "longitude": null, 
        "name": "Nezsider (Neusiedl am See)"
      }, 
      {
        "id": "008133020_247", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3757, 
        "longitude": null, 
        "name": "Nezsiderf\u00fcrd\u0151 (Bad Neusiedl Am See )"
      }, 
      {
        "id": "008102979", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3762, 
        "longitude": null, 
        "name": "Nickelsdorf"
      }, 
      {
        "id": "005510637", 
        "is_domestic": true, 
        "latitude": 47.902253564326, 
        "legacy_id": 3791, 
        "longitude": 19.0471484617408, 
        "name": "N\u00f3gr\u00e1d"
      }, 
      {
        "id": "005510918", 
        "is_domestic": true, 
        "latitude": 47.8794472077558, 
        "legacy_id": 3792, 
        "longitude": 19.3710553006482, 
        "name": "N\u00f3gr\u00e1dk\u00f6vesd"
      }, 
      {
        "id": "005511023", 
        "is_domestic": true, 
        "latitude": 48.178165318305, 
        "legacy_id": 3793, 
        "longitude": 19.5218098867142, 
        "name": "N\u00f3gr\u00e1dszak\u00e1l"
      }, 
      {
        "id": "007216501", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3808, 
        "longitude": null, 
        "name": "Nova Pazova"
      }, 
      {
        "id": "005513219", 
        "is_domestic": true, 
        "latitude": 48.4037733695784, 
        "legacy_id": 3814, 
        "longitude": 21.1703682278674, 
        "name": "Novajidr\u00e1ny"
      }, 
      {
        "id": "005613436", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6786, 
        "longitude": null, 
        "name": "Nov\u00e9 Z\u00e1mky"
      }, 
      {
        "id": "007216003", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3818, 
        "longitude": null, 
        "name": "Novi Beograd"
      }, 
      {
        "id": "007216808", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3820, 
        "longitude": null, 
        "name": "Novi Sad"
      }, 
      {
        "id": "005543059", 
        "is_domestic": true, 
        "latitude": 46.8575757229827, 
        "legacy_id": 3836, 
        "longitude": 19.9227972765211, 
        "name": "Ny\u00e1rjas"
      }, 
      {
        "id": "005517251", 
        "is_domestic": true, 
        "latitude": 46.8701996318369, 
        "legacy_id": 3837, 
        "longitude": 19.8514604323525, 
        "name": "Ny\u00e1rl\u0151rinc"
      }, 
      {
        "id": "005544834", 
        "is_domestic": true, 
        "latitude": 46.8639286142097, 
        "legacy_id": 3838, 
        "longitude": 19.8785678588262, 
        "name": "Ny\u00e1rl\u0151rinc als\u00f3"
      }, 
      {
        "id": "005544826", 
        "is_domestic": true, 
        "latitude": 46.877653850186, 
        "legacy_id": 3839, 
        "longitude": 19.8280120409671, 
        "name": "Ny\u00e1rl\u0151rinci sz\u0151l\u0151k"
      }, 
      {
        "id": "005517087", 
        "is_domestic": true, 
        "latitude": 47.1003896995036, 
        "legacy_id": 3840, 
        "longitude": 19.7925919183347, 
        "name": "Ny\u00e1rsap\u00e1t"
      }, 
      {
        "id": "005511361", 
        "is_domestic": true, 
        "latitude": 47.9929349211441, 
        "legacy_id": 3841, 
        "longitude": 20.8402875504123, 
        "name": "Ny\u00e9kl\u00e1dh\u00e1za"
      }, 
      {
        "id": "005501602", 
        "is_domestic": true, 
        "latitude": 47.7610898924621, 
        "legacy_id": 3842, 
        "longitude": 18.5614842198194, 
        "name": "Nyerges\u00fajfalu"
      }, 
      {
        "id": "005501594", 
        "is_domestic": true, 
        "latitude": 47.7623579772618, 
        "legacy_id": 3843, 
        "longitude": 18.540663981833, 
        "name": "Nyerges\u00fajfalu fels\u0151"
      }, 
      {
        "id": "005515180", 
        "is_domestic": true, 
        "latitude": 47.5237718490414, 
        "legacy_id": 3844, 
        "longitude": 22.0165785000244, 
        "name": "Ny\u00edr\u00e1br\u00e1ny"
      }, 
      {
        "id": "005515370", 
        "is_domestic": true, 
        "latitude": 47.6989172828995, 
        "legacy_id": 3845, 
        "longitude": 21.9026834496572, 
        "name": "Ny\u00edradony"
      }, 
      {
        "id": "005515453", 
        "is_domestic": true, 
        "latitude": 47.8423936324432, 
        "legacy_id": 3846, 
        "longitude": 22.1311567057726, 
        "name": "Ny\u00edrb\u00e1tor"
      }, 
      {
        "id": "005515404", 
        "is_domestic": true, 
        "latitude": 47.7932745425452, 
        "legacy_id": 3847, 
        "longitude": 22.0672918625943, 
        "name": "Ny\u00edrbog\u00e1t"
      }, 
      {
        "id": "005514050", 
        "is_domestic": true, 
        "latitude": 48.0822547417357, 
        "legacy_id": 3848, 
        "longitude": 21.8553616826291, 
        "name": "Ny\u00edrbogd\u00e1ny"
      }, 
      {
        "id": "005515974", 
        "is_domestic": true, 
        "latitude": 47.9081286391682, 
        "legacy_id": 3849, 
        "longitude": 22.3481857234845, 
        "name": "Ny\u00edrcsaholy"
      }, 
      {
        "id": "005515461", 
        "is_domestic": true, 
        "latitude": 47.8655841908648, 
        "legacy_id": 3850, 
        "longitude": 22.1792312710839, 
        "name": "Ny\u00edrcs\u00e1sz\u00e1ri"
      }, 
      {
        "id": "005514019", 
        "is_domestic": true, 
        "latitude": 47.9467582639252, 
        "legacy_id": 3851, 
        "longitude": 21.7056095647794, 
        "name": "Ny\u00edregyh\u00e1za"
      }, 
      {
        "id": "005515636", 
        "is_domestic": true, 
        "latitude": 47.9430132608693, 
        "legacy_id": 3852, 
        "longitude": 21.7403331512916, 
        "name": "Ny\u00edregyh\u00e1za k\u00fcls\u0151"
      }, 
      {
        "id": "005540980_248", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3853, 
        "longitude": null, 
        "name": "Ny\u00edressz\u0151l\u0151telep (Viczi\u00e1ntelep)"
      }, 
      {
        "id": "005515396", 
        "is_domestic": true, 
        "latitude": 47.7508568917771, 
        "legacy_id": 3854, 
        "longitude": 21.9878197296683, 
        "name": "Ny\u00edrgelse"
      }, 
      {
        "id": "005545849", 
        "is_domestic": true, 
        "latitude": 46.9975970295384, 
        "legacy_id": 3855, 
        "longitude": 17.2474733087488, 
        "name": "Ny\u00edrlak"
      }, 
      {
        "id": "005515735", 
        "is_domestic": true, 
        "latitude": 48.0592009499895, 
        "legacy_id": 3856, 
        "longitude": 22.2030915471497, 
        "name": "Ny\u00edrmada"
      }, 
      {
        "id": "005515487", 
        "is_domestic": true, 
        "latitude": 47.923037345814, 
        "legacy_id": 3857, 
        "longitude": 22.257435183984, 
        "name": "Ny\u00edrmeggyes"
      }, 
      {
        "id": "005515388", 
        "is_domestic": true, 
        "latitude": 47.7373169586498, 
        "legacy_id": 3858, 
        "longitude": 21.9588415224445, 
        "name": "Ny\u00edrmih\u00e1lydi"
      }, 
      {
        "id": "005511502", 
        "is_domestic": true, 
        "latitude": 48.0051960596314, 
        "legacy_id": 3859, 
        "longitude": 21.6156509144755, 
        "name": "Ny\u00edrtelek"
      }, 
      {
        "id": "005510033_249", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 3864, 
        "longitude": null, 
        "name": "Nyugati (Budapest-Nyugati)"
      }, 
      {
        "id": "005502915", 
        "is_domestic": true, 
        "latitude": 47.587649480603, 
        "legacy_id": 3866, 
        "longitude": 17.6981471983708, 
        "name": "Ny\u00fal"
      }, 
      {
        "id": "005544735", 
        "is_domestic": true, 
        "latitude": 46.9870836022165, 
        "legacy_id": 3898, 
        "longitude": 20.1108947303474, 
        "name": "\u00d3b\u00f6g"
      }, 
      {
        "id": "005501404", 
        "is_domestic": true, 
        "latitude": 47.5692330221584, 
        "legacy_id": 7313, 
        "longitude": 19.031750474362, 
        "name": "\u00d3buda"
      }, 
      {
        "id": "005516824", 
        "is_domestic": true, 
        "latitude": 47.3012609189986, 
        "legacy_id": 3903, 
        "longitude": 19.2324582641012, 
        "name": "\u00d3csa"
      }, 
      {
        "id": "005341884", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3906, 
        "longitude": null, 
        "name": "Odoreu"
      }, 
      {
        "id": "005515685", 
        "is_domestic": true, 
        "latitude": 47.9404695186576, 
        "legacy_id": 3907, 
        "longitude": 22.0413097793688, 
        "name": "\u00d3feh\u00e9rt\u00f3"
      }, 
      {
        "id": "005514548", 
        "is_domestic": true, 
        "latitude": 47.6232234007234, 
        "legacy_id": 3918, 
        "longitude": 20.9511381409819, 
        "name": "Ohat-Pusztak\u00f3cs"
      }, 
      {
        "id": "005518796", 
        "is_domestic": true, 
        "latitude": 46.8925018555943, 
        "legacy_id": 3920, 
        "longitude": 21.33917233995, 
        "name": "Ok\u00e1ny"
      }, 
      {
        "id": "005507575", 
        "is_domestic": true, 
        "latitude": 45.9340454007696, 
        "legacy_id": 3922, 
        "longitude": 17.8650939748683, 
        "name": "Okor\u00e1g-K\u00e1r\u00e1szpuszta"
      }, 
      {
        "id": "005513441", 
        "is_domestic": true, 
        "latitude": 48.2582824311937, 
        "legacy_id": 3925, 
        "longitude": 21.448276400545, 
        "name": "Olaszliszka-Tolcsva"
      }, 
      {
        "id": "005513110", 
        "is_domestic": true, 
        "latitude": 48.1218766586743, 
        "legacy_id": 3940, 
        "longitude": 20.9071528805463, 
        "name": "Onga"
      }, 
      {
        "id": "005515966", 
        "is_domestic": true, 
        "latitude": 47.9979366004894, 
        "legacy_id": 3941, 
        "longitude": 22.3183949947667, 
        "name": "\u00d3p\u00e1lyi"
      }, 
      {
        "id": "007216503_250", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6599, 
        "longitude": null, 
        "name": "\u00d3p\u00e1zova (Stara Pazova)"
      }, 
      {
        "id": "005104895", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 9972, 
        "longitude": null, 
        "name": "Opoczno Poludnie"
      }, 
      {
        "id": "005106060", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Opole Glowne"
      }, 
      {
        "id": "005332663", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3945, 
        "longitude": null, 
        "name": "Oradea"
      }, 
      {
        "id": "005332704", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3948, 
        "longitude": null, 
        "name": "Oradea Vest"
      }, 
      {
        "id": "007943600_251", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3962, 
        "longitude": null, 
        "name": "Ormosd (Ormoz)"
      }, 
      {
        "id": "007943600", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3963, 
        "longitude": null, 
        "name": "Ormoz"
      }, 
      {
        "id": "005515644", 
        "is_domestic": true, 
        "latitude": 47.945813317645, 
        "legacy_id": 3964, 
        "longitude": 21.8064361185889, 
        "name": "Oros"
      }, 
      {
        "id": "005518614", 
        "is_domestic": true, 
        "latitude": 46.5660958384179, 
        "legacy_id": 3965, 
        "longitude": 20.6644356392198, 
        "name": "Orosh\u00e1za"
      }, 
      {
        "id": "005544339", 
        "is_domestic": true, 
        "latitude": 46.5537241262124, 
        "legacy_id": 3966, 
        "longitude": 20.6557510917675, 
        "name": "Orosh\u00e1za fels\u0151"
      }, 
      {
        "id": "005544438", 
        "is_domestic": true, 
        "latitude": 46.5799673002771, 
        "legacy_id": 3967, 
        "longitude": 20.6836372637914, 
        "name": "Orosh\u00e1za-\u00dcveggy\u00e1r"
      }, 
      {
        "id": "005518622", 
        "is_domestic": true, 
        "latitude": 46.5970844152744, 
        "legacy_id": 3968, 
        "longitude": 20.7604471603216, 
        "name": "Orosh\u00e1zi tany\u00e1k"
      }, 
      {
        "id": "005501768", 
        "is_domestic": true, 
        "latitude": 47.4870427748437, 
        "legacy_id": 3969, 
        "longitude": 18.309069187854, 
        "name": "Oroszl\u00e1ny"
      }, 
      {
        "id": "005614586_252", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Oroszv\u00e1r (Rusovce)"
      }, 
      {
        "id": "005311231", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6808, 
        "longitude": null, 
        "name": "Or\u015fova"
      }, 
      {
        "id": "005545906", 
        "is_domestic": true, 
        "latitude": 46.6265250980471, 
        "legacy_id": 3972, 
        "longitude": 16.6851572627192, 
        "name": "Ortah\u00e1za"
      }, 
      {
        "id": "005502204", 
        "is_domestic": true, 
        "latitude": 47.2840579515464, 
        "legacy_id": 3986, 
        "longitude": 17.0242319670264, 
        "name": "Ostffyasszonyfa"
      }, 
      {
        "id": "005434364", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3988, 
        "longitude": null, 
        "name": "Ostrava Hl. N."
      }, 
      {
        "id": "005434434", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3989, 
        "longitude": null, 
        "name": "Ostrava-Svinov"
      }, 
      {
        "id": "005107710", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3993, 
        "longitude": null, 
        "name": "Oswiecim"
      }, 
      {
        "id": "005508458", 
        "is_domestic": true, 
        "latitude": 46.5144392625887, 
        "legacy_id": 3994, 
        "longitude": 17.6572322030794, 
        "name": "Osztop\u00e1n"
      }, 
      {
        "id": "005435575", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 3997, 
        "longitude": null, 
        "name": "Otrokovice"
      }, 
      {
        "id": "005501347_253", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4004, 
        "longitude": null, 
        "name": "\u00d3v\u00e1r (Mosonmagyar\u00f3v\u00e1r)"
      }, 
      {
        "id": "005512880", 
        "is_domestic": true, 
        "latitude": 48.2225549768428, 
        "legacy_id": 4008, 
        "longitude": 20.2944045576558, 
        "name": "\u00d3zd"
      }, 
      {
        "id": "005512872", 
        "is_domestic": true, 
        "latitude": 48.234658016408, 
        "legacy_id": 4009, 
        "longitude": 20.3191959346225, 
        "name": "\u00d3zd als\u00f3"
      }, 
      {
        "id": "005506775", 
        "is_domestic": true, 
        "latitude": 46.3187667781169, 
        "legacy_id": 4012, 
        "longitude": 18.7424230931492, 
        "name": "\u0150cs\u00e9ny"
      }, 
      {
        "id": "005515545", 
        "is_domestic": true, 
        "latitude": 47.911111749877, 
        "legacy_id": 4015, 
        "longitude": 22.4956848269485, 
        "name": "\u00d6k\u00f6rit\u00f3f\u00fclp\u00f6s"
      }, 
      {
        "id": "004302485", 
        "is_domestic": true, 
        "latitude": 47.3005915192797, 
        "legacy_id": 4016, 
        "longitude": 16.843051328956, 
        "name": "\u00d6lb\u0151-Als\u00f3szeleste"
      }, 
      {
        "id": "005510587", 
        "is_domestic": true, 
        "latitude": 47.6855852488068, 
        "legacy_id": 4018, 
        "longitude": 19.2838562830987, 
        "name": "\u0150rbotty\u00e1n"
      }, 
      {
        "id": "005508482", 
        "is_domestic": true, 
        "latitude": 46.6088445316666, 
        "legacy_id": 4019, 
        "longitude": 17.632735276594, 
        "name": "\u00d6reglak"
      }, 
      {
        "id": "005510975", 
        "is_domestic": true, 
        "latitude": 48.0787095605259, 
        "legacy_id": 4020, 
        "longitude": 19.4038975639861, 
        "name": "\u0150rhalom"
      }, 
      {
        "id": "007943777_254", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7920, 
        "longitude": null, 
        "name": "\u0150rih\u00f3dos (Hodo\u0161)"
      }, 
      {
        "id": "005505074", 
        "is_domestic": true, 
        "latitude": 46.8292655559887, 
        "legacy_id": 4022, 
        "longitude": 16.4163000434852, 
        "name": "\u0150riszentp\u00e9ter"
      }, 
      {
        "id": "005516873", 
        "is_domestic": true, 
        "latitude": 47.132877991691, 
        "legacy_id": 4023, 
        "longitude": 19.4470646585607, 
        "name": "\u00d6rk\u00e9ny"
      }, 
      {
        "id": "005513805_255", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4024, 
        "longitude": null, 
        "name": "\u00d6rm\u00e9nyes (Fegyvernek-\u00d6rm\u00e9nyes)"
      }, 
      {
        "id": "005505561", 
        "is_domestic": true, 
        "latitude": 46.2978507555394, 
        "legacy_id": 4026, 
        "longitude": 16.8878393334289, 
        "name": "\u0150rtilos"
      }, 
      {
        "id": "005504432", 
        "is_domestic": true, 
        "latitude": 46.9124553148011, 
        "legacy_id": 4027, 
        "longitude": 17.8181357202523, 
        "name": "\u00d6rv\u00e9nyes"
      }, 
      {
        "id": "005545757", 
        "is_domestic": true, 
        "latitude": 47.1598202723737, 
        "legacy_id": 4028, 
        "longitude": 18.0747114218359, 
        "name": "\u00d6sk\u00fc"
      }, 
      {
        "id": "005544602", 
        "is_domestic": true, 
        "latitude": 46.390360722906, 
        "legacy_id": 4030, 
        "longitude": 20.0157922270628, 
        "name": "\u0150szesz\u00e9k"
      }, 
      {
        "id": "005501313", 
        "is_domestic": true, 
        "latitude": 47.7199147251543, 
        "legacy_id": 4031, 
        "longitude": 17.4892697679728, 
        "name": "\u00d6ttev\u00e9ny"
      }, 
      {
        "id": "005506361", 
        "is_domestic": true, 
        "latitude": 46.2927427722262, 
        "legacy_id": 4032, 
        "longitude": 17.35770561723, 
        "name": "\u00d6tv\u00f6sk\u00f3nyi"
      }, 
      {
        "id": "008101204", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4033, 
        "longitude": null, 
        "name": "\u00d6tztal"
      }, 
      {
        "id": "005505413_256", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4037, 
        "longitude": null, 
        "name": "Pacsa (Zalaszentmih\u00e1ly-Pacsa)"
      }, 
      {
        "id": "004305330", 
        "is_domestic": true, 
        "latitude": 47.0106773071586, 
        "legacy_id": 4038, 
        "longitude": 16.8343332892125, 
        "name": "P\u00e1csony"
      }, 
      {
        "id": "005504960_257", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4045, 
        "longitude": null, 
        "name": "P\u00e1ka (Cs\u00f6m\u00f6d\u00e9r-P\u00e1ka)"
      }, 
      {
        "id": "005504853", 
        "is_domestic": true, 
        "latitude": 46.9590221038361, 
        "legacy_id": 4046, 
        "longitude": 16.9968939040044, 
        "name": "Pakod"
      }, 
      {
        "id": "005506759_258", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4048, 
        "longitude": null, 
        "name": "Pal\u00e1nk (Szeksz\u00e1rd-Pal\u00e1nk)"
      }, 
      {
        "id": "004302394", 
        "is_domestic": true, 
        "latitude": 47.4921671647306, 
        "legacy_id": 4054, 
        "longitude": 17.1374003479017, 
        "name": "P\u00e1li-Vadosfa"
      }, 
      {
        "id": "005507443", 
        "is_domestic": true, 
        "latitude": 45.8913004152234, 
        "legacy_id": 4055, 
        "longitude": 18.3940459709269, 
        "name": "Palkonya"
      }, 
      {
        "id": "005549411", 
        "is_domestic": true, 
        "latitude": 46.6628237359469, 
        "legacy_id": 4056, 
        "longitude": 17.4574524237226, 
        "name": "P\u00e1lmajor"
      }, 
      {
        "id": "008103003", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4061, 
        "longitude": null, 
        "name": "Pama"
      }, 
      {
        "id": "008133028", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4062, 
        "longitude": null, 
        "name": "Pamhagen-Pomogy"
      }, 
      {
        "id": "005508466", 
        "is_domestic": true, 
        "latitude": 46.5571425634024, 
        "legacy_id": 4063, 
        "longitude": 17.633733090978, 
        "name": "Pamuk"
      }, 
      {
        "id": "008102976_259", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4064, 
        "longitude": null, 
        "name": "P\u00e1ndorfalu (Parndorf)"
      }, 
      {
        "id": "008102975_260", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4065, 
        "longitude": null, 
        "name": "P\u00e1ndorfalu meg\u00e1ll\u00f3 (Parndorf Ort)"
      }, 
      {
        "id": "005505058", 
        "is_domestic": true, 
        "latitude": 46.836191933562, 
        "legacy_id": 4067, 
        "longitude": 16.4974975397445, 
        "name": "Pankasz"
      }, 
      {
        "id": "005502931", 
        "is_domestic": true, 
        "latitude": 47.5476081298858, 
        "legacy_id": 4068, 
        "longitude": 17.7406735439882, 
        "name": "Pannonhalma"
      }, 
      {
        "id": "005502121", 
        "is_domestic": true, 
        "latitude": 47.3400999523249, 
        "legacy_id": 4071, 
        "longitude": 17.4586989472787, 
        "name": "P\u00e1pa"
      }, 
      {
        "id": "005453613", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4076, 
        "longitude": null, 
        "name": "Pardubice hl. n."
      }, 
      {
        "id": "005542903_261", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6665, 
        "longitude": null, 
        "name": "Park (V\u00e1rosi park)"
      }, 
      {
        "id": "005613526_262", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7906, 
        "longitude": null, 
        "name": "P\u00e1rk\u00e1ny (\u0160t\u00farovo)"
      }, 
      {
        "id": "008102976", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4086, 
        "longitude": null, 
        "name": "Parndorf"
      }, 
      {
        "id": "008102975", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4087, 
        "longitude": null, 
        "name": "Parndorf Ort"
      }, 
      {
        "id": "005511809", 
        "is_domestic": true, 
        "latitude": 47.9191149782614, 
        "legacy_id": 4104, 
        "longitude": 19.6890956630287, 
        "name": "P\u00e1szt\u00f3"
      }, 
      {
        "id": "005514092", 
        "is_domestic": true, 
        "latitude": 48.1587429422351, 
        "legacy_id": 4107, 
        "longitude": 21.9966257832972, 
        "name": "P\u00e1troha"
      }, 
      {
        "id": "005541509", 
        "is_domestic": true, 
        "latitude": 47.6301627128327, 
        "legacy_id": 4121, 
        "longitude": 18.8524475732477, 
        "name": "P\u00e1zm\u00e1neum"
      }, 
      {
        "id": "005511114", 
        "is_domestic": true, 
        "latitude": 47.4935808553582, 
        "legacy_id": 4122, 
        "longitude": 19.3384194611115, 
        "name": "P\u00e9cel"
      }, 
      {
        "id": "005507294", 
        "is_domestic": true, 
        "latitude": 46.0666585971766, 
        "legacy_id": 4124, 
        "longitude": 18.2259601508975, 
        "name": "P\u00e9cs"
      }, 
      {
        "id": "005507385", 
        "is_domestic": true, 
        "latitude": 46.0640241079864, 
        "legacy_id": 4125, 
        "longitude": 18.2698536833037, 
        "name": "P\u00e9csb\u00e1nya-Rendez\u0151"
      }, 
      {
        "id": "005507377", 
        "is_domestic": true, 
        "latitude": 46.0718625266969, 
        "legacy_id": 4126, 
        "longitude": 18.2401895712001, 
        "name": "P\u00e9cs-K\u00fclv\u00e1ros"
      }, 
      {
        "id": "005507393", 
        "is_domestic": true, 
        "latitude": 46.0092648829769, 
        "legacy_id": 4127, 
        "longitude": 18.2755520279786, 
        "name": "P\u00e9csudvard"
      }, 
      {
        "id": "005515776", 
        "is_domestic": true, 
        "latitude": 47.9953045870252, 
        "legacy_id": 4134, 
        "longitude": 22.5669895793086, 
        "name": "Penyige"
      }, 
      {
        "id": "005512997", 
        "is_domestic": true, 
        "latitude": 48.4716569548084, 
        "legacy_id": 4145, 
        "longitude": 20.6911852862476, 
        "name": "Perkupa"
      }, 
      {
        "id": "005510314", 
        "is_domestic": true, 
        "latitude": 47.4338509103194, 
        "legacy_id": 4159, 
        "longitude": 19.0971124379001, 
        "name": "Pesterzs\u00e9bet"
      }, 
      {
        "id": "005516782", 
        "is_domestic": true, 
        "latitude": 47.4031053385378, 
        "legacy_id": 4160, 
        "longitude": 19.1875095554566, 
        "name": "Pestszentimre"
      }, 
      {
        "id": "005510355", 
        "is_domestic": true, 
        "latitude": 47.4140682316287, 
        "legacy_id": 4161, 
        "longitude": 19.172955088873, 
        "name": "Pestszentimre fels\u0151"
      }, 
      {
        "id": "005510181", 
        "is_domestic": true, 
        "latitude": 47.4547220708019, 
        "legacy_id": 4162, 
        "longitude": 19.182686267417, 
        "name": "Pestszentl\u0151rinc"
      }, 
      {
        "id": "005505645", 
        "is_domestic": true, 
        "latitude": 46.0066910129283, 
        "legacy_id": 4166, 
        "longitude": 17.3579569411579, 
        "name": "P\u00e9terhida-Koml\u00f3sd"
      }, 
      {
        "id": "005541269_263", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4167, 
        "longitude": null, 
        "name": "P\u00e9teri (Hossz\u00faberek-P\u00e9teri)"
      }, 
      {
        "id": "005503921", 
        "is_domestic": true, 
        "latitude": 47.1670843673547, 
        "legacy_id": 4170, 
        "longitude": 18.122342884216, 
        "name": "P\u00e9tf\u00fcrd\u0151"
      }, 
      {
        "id": "005517145", 
        "is_domestic": true, 
        "latitude": 46.6173035574375, 
        "legacy_id": 4172, 
        "longitude": 19.8651220887065, 
        "name": "Pet\u0151fisz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005544578", 
        "is_domestic": true, 
        "latitude": 46.5880306329126, 
        "legacy_id": 4173, 
        "longitude": 19.8744066452851, 
        "name": "Pet\u0151fisz\u00e1ll\u00e1si tany\u00e1k"
      }, 
      {
        "id": "005544792", 
        "is_domestic": true, 
        "latitude": 46.7252428687703, 
        "legacy_id": 4174, 
        "longitude": 19.8468971298466, 
        "name": "Pet\u0151fiv\u00e1ros"
      }, 
      {
        "id": "004302659", 
        "is_domestic": true, 
        "latitude": 47.5948156470013, 
        "legacy_id": 4175, 
        "longitude": 16.8947495447865, 
        "name": "Pet\u0151h\u00e1za"
      }, 
      {
        "id": "005503194", 
        "is_domestic": true, 
        "latitude": 47.2622829832746, 
        "legacy_id": 4186, 
        "longitude": 18.7127034624191, 
        "name": "Pettend"
      }, 
      {
        "id": "005512732_264", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6758, 
        "longitude": null, 
        "name": "Piact\u00e9r (Saj\u00f3szentp\u00e9ter-Piact\u00e9r)"
      }, 
      {
        "id": "005513680", 
        "is_domestic": true, 
        "latitude": 47.2793595559625, 
        "legacy_id": 4220, 
        "longitude": 19.5372442870675, 
        "name": "Pilis"
      }, 
      {
        "id": "005501453", 
        "is_domestic": true, 
        "latitude": 47.6382314204988, 
        "legacy_id": 4221, 
        "longitude": 18.8294549616963, 
        "name": "Piliscsaba"
      }, 
      {
        "id": "005540261", 
        "is_domestic": true, 
        "latitude": 47.6739220314104, 
        "legacy_id": 4223, 
        "longitude": 18.7912749525637, 
        "name": "Piliscs\u00e9v"
      }, 
      {
        "id": "005501461", 
        "is_domestic": true, 
        "latitude": 47.6560756389768, 
        "legacy_id": 4224, 
        "longitude": 18.7965433120839, 
        "name": "Pilisj\u00e1szfalu"
      }, 
      {
        "id": "005501438", 
        "is_domestic": true, 
        "latitude": 47.614357592603, 
        "legacy_id": 4225, 
        "longitude": 18.9023167033487, 
        "name": "Pilisv\u00f6r\u00f6sv\u00e1r"
      }, 
      {
        "id": "005505983", 
        "is_domestic": true, 
        "latitude": 46.6813039911795, 
        "legacy_id": 4232, 
        "longitude": 18.4302483517126, 
        "name": "Pincehely"
      }, 
      {
        "id": "004302683", 
        "is_domestic": true, 
        "latitude": 47.6003302640955, 
        "legacy_id": 4235, 
        "longitude": 16.7683194922281, 
        "name": "Pinnye"
      }, 
      {
        "id": "005547340", 
        "is_domestic": true, 
        "latitude": 47.1465806164115, 
        "legacy_id": 4239, 
        "longitude": 20.1282016831471, 
        "name": "Piroska"
      }, 
      {
        "id": "005516303", 
        "is_domestic": true, 
        "latitude": 46.4987977946633, 
        "legacy_id": 4242, 
        "longitude": 19.4499452514497, 
        "name": "Pirt\u00f3"
      }, 
      {
        "id": "005516295", 
        "is_domestic": true, 
        "latitude": 46.5213817621379, 
        "legacy_id": 4243, 
        "longitude": 19.4344504545351, 
        "name": "Pirt\u00f3i sz\u0151l\u0151k"
      }, 
      {
        "id": "005321236_265", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4245, 
        "longitude": null, 
        "name": "Piski (Simeria)"
      }, 
      {
        "id": "005501560", 
        "is_domestic": true, 
        "latitude": 47.7530895810198, 
        "legacy_id": 4246, 
        "longitude": 18.477839713584, 
        "name": "Piszke"
      }, 
      {
        "id": "005518390", 
        "is_domestic": true, 
        "latitude": 46.3234075878345, 
        "legacy_id": 4250, 
        "longitude": 20.7535228573428, 
        "name": "Pitvaros"
      }, 
      {
        "id": "005330304", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6733, 
        "longitude": null, 
        "name": "Ploie\u015fti Vest"
      }, 
      {
        "id": "005515024", 
        "is_domestic": true, 
        "latitude": 47.2883354843295, 
        "legacy_id": 4282, 
        "longitude": 21.7929585582979, 
        "name": "Pocsaj-Eszt\u00e1r"
      }, 
      {
        "id": "005543158", 
        "is_domestic": true, 
        "latitude": 48.2961875711648, 
        "legacy_id": 4314, 
        "longitude": 20.3827577564033, 
        "name": "Pogonyipuszta"
      }, 
      {
        "id": "005504861", 
        "is_domestic": true, 
        "latitude": 46.9245272326797, 
        "legacy_id": 4325, 
        "longitude": 16.9718324000488, 
        "name": "P\u00f3kaszepetk"
      }, 
      {
        "id": "005504283", 
        "is_domestic": true, 
        "latitude": 47.0696058920061, 
        "legacy_id": 4327, 
        "longitude": 18.2838704311005, 
        "name": "Polg\u00e1rdi"
      }, 
      {
        "id": "005504275", 
        "is_domestic": true, 
        "latitude": 47.0792104150443, 
        "legacy_id": 4328, 
        "longitude": 18.3143013100726, 
        "name": "Polg\u00e1rdi-Ipartelepek"
      }, 
      {
        "id": "005545369", 
        "is_domestic": true, 
        "latitude": 47.018910606135, 
        "legacy_id": 4329, 
        "longitude": 18.3004391000083, 
        "name": "Polg\u00e1rdi-Tekerespuszta"
      }, 
      {
        "id": "007943203", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4330, 
        "longitude": null, 
        "name": "Poljcane"
      }, 
      {
        "id": "008133028_266", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4338, 
        "longitude": null, 
        "name": "Pomogy (Pamhagen-Pomogy)"
      }, 
      {
        "id": "005515552", 
        "is_domestic": true, 
        "latitude": 47.8680436250245, 
        "legacy_id": 4352, 
        "longitude": 22.5682770375842, 
        "name": "Porcsalma-Tyukod"
      }, 
      {
        "id": "005514571", 
        "is_domestic": true, 
        "latitude": 47.6577603660937, 
        "legacy_id": 4357, 
        "longitude": 20.6544879437406, 
        "name": "Poroszl\u00f3"
      }, 
      {
        "id": "005502220", 
        "is_domestic": true, 
        "latitude": 47.238901260689, 
        "legacy_id": 4358, 
        "longitude": 16.8331838990968, 
        "name": "Porp\u00e1c"
      }, 
      {
        "id": "005506429", 
        "is_domestic": true, 
        "latitude": 46.25311708424, 
        "legacy_id": 4359, 
        "longitude": 17.0210914321776, 
        "name": "Porrogszentkir\u00e1ly"
      }, 
      {
        "id": "005511973", 
        "is_domestic": true, 
        "latitude": 47.4180146265985, 
        "legacy_id": 4361, 
        "longitude": 19.958517025562, 
        "name": "Portelek"
      }, 
      {
        "id": "005502980", 
        "is_domestic": true, 
        "latitude": 47.3269668659116, 
        "legacy_id": 4365, 
        "longitude": 17.8414752698532, 
        "name": "Porva-Csesznek"
      }, 
      {
        "id": "004302477", 
        "is_domestic": true, 
        "latitude": 47.3268576915498, 
        "legacy_id": 4367, 
        "longitude": 16.8557251965534, 
        "name": "P\u00f3sfa"
      }, 
      {
        "id": "005620000_267", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4384, 
        "longitude": null, 
        "name": "Pozsony (BRATISLAVA*)"
      }, 
      {
        "id": "005614576_268", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4385, 
        "longitude": null, 
        "name": "Pozsonyligetfalu (Bratislava-Petrzalka)"
      }, 
      {
        "id": "005507153", 
        "is_domestic": true, 
        "latitude": 46.1990102523525, 
        "legacy_id": 4392, 
        "longitude": 18.8283733644566, 
        "name": "P\u00f6rb\u00f6ly"
      }, 
      {
        "id": "005505421", 
        "is_domestic": true, 
        "latitude": 46.6820013570627, 
        "legacy_id": 4395, 
        "longitude": 16.9582313372847, 
        "name": "P\u00f6tr\u00e9te"
      }, 
      {
        "id": "005408991_269", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4397, 
        "longitude": null, 
        "name": "Prag (PRAHA*)"
      }, 
      {
        "id": "005408991_270", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4398, 
        "longitude": null, 
        "name": "Pr\u00e1ga (PRAHA*)"
      }, 
      {
        "id": "007943300", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4399, 
        "longitude": null, 
        "name": "Pragersko"
      }, 
      {
        "id": "005408991_271", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4400, 
        "longitude": null, 
        "name": "Prague (PRAHA*)"
      }, 
      {
        "id": "005408991", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4401, 
        "longitude": null, 
        "name": "PRAHA*"
      }, 
      {
        "id": "005457076", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4402, 
        "longitude": null, 
        "name": "Praha hl. n."
      }, 
      {
        "id": "005457256", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4404, 
        "longitude": null, 
        "name": "Praha-Holesovice"
      }, 
      {
        "id": "005457176", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4406, 
        "longitude": null, 
        "name": "Praha-Liben"
      }, 
      {
        "id": "005330615", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4419, 
        "longitude": null, 
        "name": "Predeal"
      }, 
      {
        "id": "005330615_272", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4420, 
        "longitude": null, 
        "name": "Prede\u00e1l (Predeal)"
      }, 
      {
        "id": "005453513", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4424, 
        "longitude": null, 
        "name": "Prelouc"
      }, 
      {
        "id": "005434662", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4426, 
        "longitude": null, 
        "name": "Prerov"
      }, 
      {
        "id": "007943355", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4462, 
        "longitude": null, 
        "name": "Ptuj"
      }, 
      {
        "id": "005518242", 
        "is_domestic": true, 
        "latitude": 46.9398777017093, 
        "legacy_id": 4493, 
        "longitude": 20.5566694042525, 
        "name": "Pusztab\u00e1nr\u00e9ve"
      }, 
      {
        "id": "005508516", 
        "is_domestic": true, 
        "latitude": 46.6866850727608, 
        "legacy_id": 4494, 
        "longitude": 17.5945607764997, 
        "name": "Pusztaber\u00e9ny"
      }, 
      {
        "id": "005543968", 
        "is_domestic": true, 
        "latitude": 47.4535243024269, 
        "legacy_id": 4495, 
        "longitude": 20.7498012196622, 
        "name": "Pusztakett\u0151s"
      }, 
      {
        "id": "005514548_273", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4496, 
        "longitude": null, 
        "name": "Pusztak\u00f3cs (Ohat-Pusztak\u00f3cs)"
      }, 
      {
        "id": "005511940", 
        "is_domestic": true, 
        "latitude": 47.564239601245, 
        "legacy_id": 4497, 
        "longitude": 19.794225462667, 
        "name": "Pusztamonostor"
      }, 
      {
        "id": "005517814", 
        "is_domestic": true, 
        "latitude": 47.0928348437011, 
        "legacy_id": 4498, 
        "longitude": 20.4557387298872, 
        "name": "Pusztap\u00f3"
      }, 
      {
        "id": "005505876", 
        "is_domestic": true, 
        "latitude": 47.1396806170993, 
        "legacy_id": 4499, 
        "longitude": 18.7616331132752, 
        "name": "Pusztaszabolcs"
      }, 
      {
        "id": "005511536", 
        "is_domestic": true, 
        "latitude": 47.4399555607145, 
        "legacy_id": 4500, 
        "longitude": 19.4707547302853, 
        "name": "Pusztaszentistv\u00e1n"
      }, 
      {
        "id": "005544933", 
        "is_domestic": true, 
        "latitude": 46.6765229342196, 
        "legacy_id": 4501, 
        "longitude": 20.4073417216693, 
        "name": "Pusztatemplom"
      }, 
      {
        "id": "005512823", 
        "is_domestic": true, 
        "latitude": 48.2865816273339, 
        "legacy_id": 4503, 
        "longitude": 20.4373179464323, 
        "name": "Putnok"
      }, 
      {
        "id": "005510876", 
        "is_domestic": true, 
        "latitude": 47.7728801470579, 
        "legacy_id": 4505, 
        "longitude": 19.3686183174332, 
        "name": "P\u00fcsp\u00f6khatvan"
      }, 
      {
        "id": "005513862", 
        "is_domestic": true, 
        "latitude": 47.3277115473379, 
        "legacy_id": 4506, 
        "longitude": 21.1286097514001, 
        "name": "P\u00fcsp\u00f6klad\u00e1ny"
      }, 
      {
        "id": "005544305", 
        "is_domestic": true, 
        "latitude": 47.3190854521512, 
        "legacy_id": 4507, 
        "longitude": 21.095938747764, 
        "name": "P\u00fcsp\u00f6klad\u00e1ny-V\u00e1s\u00e1rt\u00e9r"
      }, 
      {
        "id": "004305306", 
        "is_domestic": true, 
        "latitude": 47.0848659920452, 
        "legacy_id": 4508, 
        "longitude": 16.7684347872593, 
        "name": "P\u00fcsp\u00f6kmoln\u00e1ri"
      }, 
      {
        "id": "008103492", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4512, 
        "longitude": null, 
        "name": "Raaba"
      }, 
      {
        "id": "005503087_274", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4514, 
        "longitude": null, 
        "name": "R\u00e1bacsanak (Egyed-R\u00e1bacsanak)"
      }, 
      {
        "id": "005545740", 
        "is_domestic": true, 
        "latitude": 47.4387026985076, 
        "legacy_id": 7357, 
        "longitude": 17.3374191703581, 
        "name": "R\u00e1bah\u00edd"
      }, 
      {
        "id": "004302527", 
        "is_domestic": true, 
        "latitude": 47.648991, 
        "legacy_id": 4515, 
        "longitude": 17.462478, 
        "name": "R\u00e1bapatona"
      }, 
      {
        "id": "005503095", 
        "is_domestic": true, 
        "latitude": 47.5572988896109, 
        "legacy_id": 4516, 
        "longitude": 17.3153726672726, 
        "name": "R\u00e1bapord\u00e1ny"
      }, 
      {
        "id": "005503079_275", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4517, 
        "longitude": null, 
        "name": "R\u00e1baszentandr\u00e1s (Szany-R\u00e1baszentandr\u00e1s)"
      }, 
      {
        "id": "004302592", 
        "is_domestic": true, 
        "latitude": 47.5925429396379, 
        "legacy_id": 4518, 
        "longitude": 17.1590318043462, 
        "name": "R\u00e1batam\u00e1si"
      }, 
      {
        "id": "005506486", 
        "is_domestic": true, 
        "latitude": 47.02418452846, 
        "legacy_id": 4521, 
        "longitude": 18.9101577443059, 
        "name": "R\u00e1calm\u00e1s"
      }, 
      {
        "id": "005106870", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Raciborz"
      }, 
      {
        "id": "005545914", 
        "is_domestic": true, 
        "latitude": 46.6550191295727, 
        "legacy_id": 4532, 
        "longitude": 16.7664265420615, 
        "name": "R\u00e1dih\u00e1za"
      }, 
      {
        "id": "005321705", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4534, 
        "longitude": null, 
        "name": "Radna"
      }, 
      {
        "id": "005342747_276", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4535, 
        "longitude": null, 
        "name": "Radn\u00f3t (Iernut)"
      }, 
      {
        "id": "004301974", 
        "is_domestic": true, 
        "latitude": 47.9942853844678, 
        "legacy_id": 4557, 
        "longitude": 17.1928771726864, 
        "name": "Rajka"
      }, 
      {
        "id": "005511486", 
        "is_domestic": true, 
        "latitude": 48.1200676110284, 
        "legacy_id": 4558, 
        "longitude": 21.4747192201833, 
        "name": "Rakamaz"
      }, 
      {
        "id": "005515727", 
        "is_domestic": true, 
        "latitude": 48.0218331611161, 
        "legacy_id": 4562, 
        "longitude": 22.1778715992427, 
        "name": "R\u00e1k\u00f3czitanya"
      }, 
      {
        "id": "005510074", 
        "is_domestic": true, 
        "latitude": 47.4885838393847, 
        "legacy_id": 4563, 
        "longitude": 19.1733547268448, 
        "name": "R\u00e1kos"
      }, 
      {
        "id": "005511106", 
        "is_domestic": true, 
        "latitude": 47.4923750551865, 
        "legacy_id": 4564, 
        "longitude": 19.2856876497156, 
        "name": "R\u00e1koscsaba"
      }, 
      {
        "id": "005511098", 
        "is_domestic": true, 
        "latitude": 47.4872246299918, 
        "legacy_id": 4565, 
        "longitude": 19.2712940507464, 
        "name": "R\u00e1koscsaba-\u00dajtelep"
      }, 
      {
        "id": "005511528", 
        "is_domestic": true, 
        "latitude": 47.4685892764544, 
        "legacy_id": 4566, 
        "longitude": 19.2449367553457, 
        "name": "R\u00e1koshegy"
      }, 
      {
        "id": "005541640", 
        "is_domestic": true, 
        "latitude": 47.4568091834791, 
        "legacy_id": 4567, 
        "longitude": 19.2957698501576, 
        "name": "R\u00e1koskert"
      }, 
      {
        "id": "005511080", 
        "is_domestic": true, 
        "latitude": 47.485966304226, 
        "legacy_id": 4568, 
        "longitude": 19.258186279569, 
        "name": "R\u00e1kosliget"
      }, 
      {
        "id": "005540915", 
        "is_domestic": true, 
        "latitude": 47.5783264162087, 
        "legacy_id": 4569, 
        "longitude": 19.1227133120759, 
        "name": "R\u00e1kospalota-Kertv\u00e1ros"
      }, 
      {
        "id": "005510140", 
        "is_domestic": true, 
        "latitude": 47.5656171674538, 
        "legacy_id": 4570, 
        "longitude": 19.1120298916529, 
        "name": "R\u00e1kospalota-\u00dajpest"
      }, 
      {
        "id": "005510082", 
        "is_domestic": true, 
        "latitude": 47.5255162517382, 
        "legacy_id": 4571, 
        "longitude": 19.0895025284298, 
        "name": "R\u00e1kosrendez\u0151"
      }, 
      {
        "id": "005546193", 
        "is_domestic": true, 
        "latitude": 46.8508645802641, 
        "legacy_id": 4585, 
        "longitude": 17.4124520125878, 
        "name": "Raposka"
      }, 
      {
        "id": "005511031", 
        "is_domestic": true, 
        "latitude": 48.207221440636, 
        "legacy_id": 4586, 
        "longitude": 19.5412155162554, 
        "name": "R\u00e1r\u00f3spuszta"
      }, 
      {
        "id": "005513276", 
        "is_domestic": true, 
        "latitude": 48.2144103493131, 
        "legacy_id": 4595, 
        "longitude": 21.2300948802129, 
        "name": "R\u00e1tka"
      }, 
      {
        "id": "004302303", 
        "is_domestic": true, 
        "latitude": 46.9673747093292, 
        "legacy_id": 4596, 
        "longitude": 16.4331081264047, 
        "name": "R\u00e1t\u00f3t"
      }, 
      {
        "id": "005331774", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6631, 
        "longitude": null, 
        "name": "R\u0103zboieni"
      }, 
      {
        "id": "005504994", 
        "is_domestic": true, 
        "latitude": 46.6180844199808, 
        "legacy_id": 4617, 
        "longitude": 16.4710432447672, 
        "name": "R\u00e9dics"
      }, 
      {
        "id": "005342474", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4623, 
        "longitude": null, 
        "name": "Reghin"
      }, 
      {
        "id": "005506122", 
        "is_domestic": true, 
        "latitude": 46.5687730469891, 
        "legacy_id": 4624, 
        "longitude": 18.3958272422344, 
        "name": "Reg\u00f6ly"
      }, 
      {
        "id": "005504515_277", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4634, 
        "longitude": null, 
        "name": "Rendes (Balatonrendes)"
      }, 
      {
        "id": "005543562", 
        "is_domestic": true, 
        "latitude": 46.430135141307, 
        "legacy_id": 4638, 
        "longitude": 17.847413007325, 
        "name": "R\u00e9p\u00e1spuszta"
      }, 
      {
        "id": "004302436", 
        "is_domestic": true, 
        "latitude": 47.4189947945525, 
        "legacy_id": 4639, 
        "longitude": 17.0092496494399, 
        "name": "R\u00e9pcelak"
      }, 
      {
        "id": "007873108", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4640, 
        "longitude": null, 
        "name": "Repinec"
      }, 
      {
        "id": "005541095_278", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6674, 
        "longitude": null, 
        "name": "Rep\u00fcl\u0151t\u00e9r (Sz\u00e9kesfeh\u00e9rv\u00e1r-Rep\u00fcl\u0151t\u00e9r)"
      }, 
      {
        "id": "005345256", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4642, 
        "longitude": null, 
        "name": "Resighea"
      }, 
      {
        "id": "005505942", 
        "is_domestic": true, 
        "latitude": 46.8140789555941, 
        "legacy_id": 4648, 
        "longitude": 18.6016424792718, 
        "name": "R\u00e9tszilas"
      }, 
      {
        "id": "005506676", 
        "is_domestic": true, 
        "latitude": 46.8289505036111, 
        "legacy_id": 4649, 
        "longitude": 18.6369241686592, 
        "name": "R\u00e9tszilas als\u00f3"
      }, 
      {
        "id": "005504507", 
        "is_domestic": true, 
        "latitude": 46.8291445955741, 
        "legacy_id": 4655, 
        "longitude": 17.6322362174254, 
        "name": "R\u00e9vf\u00fcl\u00f6p"
      }, 
      {
        "id": "005545864", 
        "is_domestic": true, 
        "latitude": 47.0603871661226, 
        "legacy_id": 4668, 
        "longitude": 17.1996179519356, 
        "name": "Rig\u00e1cs"
      }, 
      {
        "id": "005507559_279", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4669, 
        "longitude": null, 
        "name": "Rig\u00f3puszta (Kir\u00e1lyegyh\u00e1za-Rig\u00f3puszta)"
      }, 
      {
        "id": "007943001", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4680, 
        "longitude": null, 
        "name": "Rimske Toplice"
      }, 
      {
        "id": "005515719_280", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4693, 
        "longitude": null, 
        "name": "Rohod (Vaja-Rohod)"
      }, 
      {
        "id": "008105321", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4694, 
        "longitude": null, 
        "name": "Rohr Haltestelle"
      }, 
      {
        "id": "005518531_281", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6667, 
        "longitude": null, 
        "name": "R\u00f3kus (Szeged-R\u00f3kus)"
      }, 
      {
        "id": "008020174", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4714, 
        "longitude": null, 
        "name": "Rosenheim"
      }, 
      {
        "id": "005345024", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4720, 
        "longitude": null, 
        "name": "Rosiori Bihor"
      }, 
      {
        "id": "005310445", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4721, 
        "longitude": null, 
        "name": "Rosiori Nord"
      }, 
      {
        "id": "005543950", 
        "is_domestic": true, 
        "latitude": 47.9128423877267, 
        "legacy_id": 4744, 
        "longitude": 22.7823994218502, 
        "name": "Rozs\u00e1ly"
      }, 
      {
        "id": "005541087", 
        "is_domestic": true, 
        "latitude": 47.7175181926303, 
        "legacy_id": 4749, 
        "longitude": 19.2580946459902, 
        "name": "Rudnaykert"
      }, 
      {
        "id": "005614586", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Rusovce"
      }, 
      {
        "id": "005106820", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Rybnik [PKP]"
      }, 
      {
        "id": "005102580", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4779, 
        "longitude": null, 
        "name": "Rzepin"
      }, 
      {
        "id": "005341808", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4788, 
        "longitude": null, 
        "name": "Sabisa"
      }, 
      {
        "id": "005345086", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4799, 
        "longitude": null, 
        "name": "Sacuieni Bihor"
      }, 
      {
        "id": "005544180", 
        "is_domestic": true, 
        "latitude": 48.0286814796523, 
        "legacy_id": 4803, 
        "longitude": 19.0442586058679, 
        "name": "S\u00e1ferk\u00fat"
      }, 
      {
        "id": "005512716", 
        "is_domestic": true, 
        "latitude": 48.1857054494016, 
        "legacy_id": 4809, 
        "longitude": 20.7666514224237, 
        "name": "Saj\u00f3ecseg"
      }, 
      {
        "id": "005512799", 
        "is_domestic": true, 
        "latitude": 48.2726770666064, 
        "legacy_id": 4810, 
        "longitude": 20.5821142232118, 
        "name": "Saj\u00f3kaza"
      }, 
      {
        "id": "005512708", 
        "is_domestic": true, 
        "latitude": 48.1665430289999, 
        "legacy_id": 4811, 
        "longitude": 20.7748591087783, 
        "name": "Saj\u00f3kereszt\u00far"
      }, 
      {
        "id": "005512856", 
        "is_domestic": true, 
        "latitude": 48.2698473796284, 
        "legacy_id": 4813, 
        "longitude": 20.3670368029547, 
        "name": "Saj\u00f3n\u00e9meti"
      }, 
      {
        "id": "005512740", 
        "is_domestic": true, 
        "latitude": 48.2219448715092, 
        "legacy_id": 4814, 
        "longitude": 20.7084509054769, 
        "name": "Saj\u00f3szentp\u00e9ter"
      }, 
      {
        "id": "005512732", 
        "is_domestic": true, 
        "latitude": 48.2197784886718, 
        "legacy_id": 4815, 
        "longitude": 20.7261028451595, 
        "name": "Saj\u00f3szentp\u00e9ter-Piact\u00e9r"
      }, 
      {
        "id": "005511916", 
        "is_domestic": true, 
        "latitude": 48.1049381517236, 
        "legacy_id": 4819, 
        "longitude": 19.8064170979499, 
        "name": "Salg\u00f3tarj\u00e1n"
      }, 
      {
        "id": "005511874", 
        "is_domestic": true, 
        "latitude": 48.0892100669529, 
        "legacy_id": 4820, 
        "longitude": 19.791110005266, 
        "name": "Salg\u00f3tarj\u00e1n k\u00fcls\u0151"
      }, 
      {
        "id": "004305264", 
        "is_domestic": true, 
        "latitude": 47.291438, 
        "legacy_id": 4825, 
        "longitude": 16.704183, 
        "name": "Salk\u00f6vesk\u00fat-Vassur\u00e1ny"
      }, 
      {
        "id": "005505132_282", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4826, 
        "longitude": null, 
        "name": "Salomv\u00e1r (Zalacs\u00e9b-Salomv\u00e1r)"
      }, 
      {
        "id": "005335407", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4827, 
        "longitude": null, 
        "name": "Salonta"
      }, 
      {
        "id": "008101115", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4830, 
        "longitude": null, 
        "name": "SALZBURG*"
      }, 
      {
        "id": "008101114", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4835, 
        "longitude": null, 
        "name": "Salzburg Hbf"
      }, 
      {
        "id": "005345270", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4849, 
        "longitude": null, 
        "name": "Sanislau"
      }, 
      {
        "id": "005514415", 
        "is_domestic": true, 
        "latitude": 47.2596265575189, 
        "legacy_id": 4858, 
        "longitude": 21.3607671584623, 
        "name": "S\u00e1p"
      }, 
      {
        "id": "005514944", 
        "is_domestic": true, 
        "latitude": 47.4152483232341, 
        "legacy_id": 4861, 
        "longitude": 21.6250348023842, 
        "name": "S\u00e1r\u00e1nd"
      }, 
      {
        "id": "005340971", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4866, 
        "longitude": null, 
        "name": "Saratel"
      }, 
      {
        "id": "005505926", 
        "is_domestic": true, 
        "latitude": 46.8965349564082, 
        "legacy_id": 4869, 
        "longitude": 18.6120709620991, 
        "name": "S\u00e1rbog\u00e1rd"
      }, 
      {
        "id": "005505959", 
        "is_domestic": true, 
        "latitude": 46.7827668446469, 
        "legacy_id": 4872, 
        "longitude": 18.5890711495511, 
        "name": "S\u00e1regres"
      }, 
      {
        "id": "008509411", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4873, 
        "longitude": null, 
        "name": "Sargans"
      }, 
      {
        "id": "005504929", 
        "is_domestic": true, 
        "latitude": 46.7552049116134, 
        "legacy_id": 4874, 
        "longitude": 16.8511881159706, 
        "name": "S\u00e1rhida"
      }, 
      {
        "id": "005518739", 
        "is_domestic": true, 
        "latitude": 46.7367998044559, 
        "legacy_id": 4877, 
        "longitude": 21.4025305650761, 
        "name": "Sarkad"
      }, 
      {
        "id": "005518721", 
        "is_domestic": true, 
        "latitude": 46.7300260377397, 
        "legacy_id": 4878, 
        "longitude": 21.3836770968795, 
        "name": "Sarkadi Cukorgy\u00e1r"
      }, 
      {
        "id": "005518770", 
        "is_domestic": true, 
        "latitude": 46.8235536430042, 
        "legacy_id": 4879, 
        "longitude": 21.4173999042038, 
        "name": "Sarkadkereszt\u00far"
      }, 
      {
        "id": "005504135_283", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 4880, 
        "longitude": null, 
        "name": "S\u00e1rkereszt\u00far (Aba-S\u00e1rkereszt\u00far)"
      }, 
      {
        "id": "005505892", 
        "is_domestic": true, 
        "latitude": 47.0396630582494, 
        "legacy_id": 4889, 
        "longitude": 18.660106869818, 
        "name": "S\u00e1rosd"
      }, 
      {
        "id": "005513466", 
        "is_domestic": true, 
        "latitude": 48.3255323423745, 
        "legacy_id": 4892, 
        "longitude": 21.5660061835143, 
        "name": "S\u00e1rospatak"
      }, 
      {
        "id": "005514316", 
        "is_domestic": true, 
        "latitude": 47.2315524333359, 
        "legacy_id": 4894, 
        "longitude": 21.1807173320128, 
        "name": "S\u00e1rr\u00e9tudvari"
      }, 
      {
        "id": "005502212", 
        "is_domestic": true, 
        "latitude": 47.2588547965583, 
        "legacy_id": 4896, 
        "longitude": 16.9292877335461, 
        "name": "S\u00e1rv\u00e1r"
      }, 
      {
        "id": "005507203", 
        "is_domestic": true, 
        "latitude": 46.2572285673376, 
        "legacy_id": 4899, 
        "longitude": 18.1047062105299, 
        "name": "S\u00e1sd"
      }, 
      {
        "id": "005345397", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4903, 
        "longitude": null, 
        "name": "Satmarel"
      }, 
      {
        "id": "005513482", 
        "is_domestic": true, 
        "latitude": 48.3861151861339, 
        "legacy_id": 4904, 
        "longitude": 21.6577956580788, 
        "name": "S\u00e1toralja\u00fajhely"
      }, 
      {
        "id": "005345452", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4908, 
        "longitude": null, 
        "name": "Satu Mare"
      }, 
      {
        "id": "005345438", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4909, 
        "longitude": null, 
        "name": "Satu Mare Sud"
      }, 
      {
        "id": "005321559", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4918, 
        "longitude": null, 
        "name": "Savirsin"
      }, 
      {
        "id": "005503582", 
        "is_domestic": true, 
        "latitude": 46.609223524143, 
        "legacy_id": 4919, 
        "longitude": 17.2349741740019, 
        "name": "S\u00e1voly"
      }, 
      {
        "id": "005320971", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4982, 
        "longitude": null, 
        "name": "Sebes Alba"
      }, 
      {
        "id": "005341822", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 4997, 
        "longitude": null, 
        "name": "Seini"
      }, 
      {
        "id": "005508078", 
        "is_domestic": true, 
        "latitude": 45.8730429625597, 
        "legacy_id": 5003, 
        "longitude": 17.8590252336872, 
        "name": "Sellye"
      }, 
      {
        "id": "005544560", 
        "is_domestic": true, 
        "latitude": 46.6554770912955, 
        "legacy_id": 5004, 
        "longitude": 19.8532535864671, 
        "name": "Selymes"
      }, 
      {
        "id": "005511759", 
        "is_domestic": true, 
        "latitude": 47.7587662904844, 
        "legacy_id": 5005, 
        "longitude": 19.6710940986065, 
        "name": "Selyp"
      }, 
      {
        "id": "005340139_284", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6809, 
        "longitude": null, 
        "name": "Sepsiszentgy\u00f6rgy (Sf\u0103ntu Gheorghe)"
      }, 
      {
        "id": "005504267", 
        "is_domestic": true, 
        "latitude": 47.1208792223829, 
        "legacy_id": 5034, 
        "longitude": 18.5815587699332, 
        "name": "Sereg\u00e9lyes"
      }, 
      {
        "id": "005540550", 
        "is_domestic": true, 
        "latitude": 47.1193020166059, 
        "legacy_id": 5035, 
        "longitude": 18.6127180065149, 
        "name": "Sereg\u00e9lyes-Sz\u0151l\u0151hegy"
      }, 
      {
        "id": "007872402", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5036, 
        "longitude": null, 
        "name": "Sesvete"
      }, 
      {
        "id": "007872401", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5037, 
        "longitude": null, 
        "name": "Sesvetski Kraljevec"
      }, 
      {
        "id": "005340139", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6779, 
        "longitude": null, 
        "name": "Sf\u0103ntu Gheorghe"
      }, 
      {
        "id": "005320658", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5048, 
        "longitude": null, 
        "name": "Sibiu"
      }, 
      {
        "id": "005321092", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5052, 
        "longitude": null, 
        "name": "Sibot"
      }, 
      {
        "id": "005340402", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5053, 
        "longitude": null, 
        "name": "Siculeni"
      }, 
      {
        "id": "005331217", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6750, 
        "longitude": null, 
        "name": "Sighi\u015foara"
      }, 
      {
        "id": "005345103", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5075, 
        "longitude": null, 
        "name": "Silindru"
      }, 
      {
        "id": "005321236", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5082, 
        "longitude": null, 
        "name": "Simeria"
      }, 
      {
        "id": "005345127", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5085, 
        "longitude": null, 
        "name": "Simion"
      }, 
      {
        "id": "005505967", 
        "is_domestic": true, 
        "latitude": 46.756620278428, 
        "legacy_id": 5086, 
        "longitude": 18.5410624643509, 
        "name": "Simontornya"
      }, 
      {
        "id": "005330524", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5088, 
        "longitude": null, 
        "name": "Sinaia"
      }, 
      {
        "id": "005503350", 
        "is_domestic": true, 
        "latitude": 46.9075741547291, 
        "legacy_id": 5096, 
        "longitude": 18.0535692457889, 
        "name": "Si\u00f3fok"
      }, 
      {
        "id": "005508391", 
        "is_domestic": true, 
        "latitude": 46.8805126120703, 
        "legacy_id": 5097, 
        "longitude": 18.1256985804925, 
        "name": "Si\u00f3jut"
      }, 
      {
        "id": "005543240", 
        "is_domestic": true, 
        "latitude": 46.911122188652, 
        "legacy_id": 5099, 
        "longitude": 18.0769212074694, 
        "name": "Si\u00f3v\u00f6lgy"
      }, 
      {
        "id": "005544404", 
        "is_domestic": true, 
        "latitude": 46.8406863085053, 
        "legacy_id": 5100, 
        "longitude": 20.6098979374545, 
        "name": "Sirat\u00f3"
      }, 
      {
        "id": "002237690", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5119, 
        "longitude": null, 
        "name": "Skole"
      }, 
      {
        "id": "002237671", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6714, 
        "longitude": null, 
        "name": "Slavsko"
      }, 
      {
        "id": "007873102", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5167, 
        "longitude": null, 
        "name": "Sokolovac"
      }, 
      {
        "id": "005516246", 
        "is_domestic": true, 
        "latitude": 46.7685586893785, 
        "legacy_id": 5173, 
        "longitude": 19.2634381234169, 
        "name": "Soltszentimre"
      }, 
      {
        "id": "005516287", 
        "is_domestic": true, 
        "latitude": 46.5698544055105, 
        "legacy_id": 5174, 
        "longitude": 19.3955174342635, 
        "name": "Soltvadkert"
      }, 
      {
        "id": "005501420", 
        "is_domestic": true, 
        "latitude": 47.5961863150414, 
        "legacy_id": 7310, 
        "longitude": 18.9494691914389, 
        "name": "Solym\u00e1r"
      }, 
      {
        "id": "005504051", 
        "is_domestic": true, 
        "latitude": 47.124287918945, 
        "legacy_id": 5181, 
        "longitude": 17.3690384142406, 
        "name": "Soml\u00f3v\u00e1s\u00e1rhely"
      }, 
      {
        "id": "005508375", 
        "is_domestic": true, 
        "latitude": 46.8029484284314, 
        "legacy_id": 5183, 
        "longitude": 18.1494029909892, 
        "name": "Som-Nagyber\u00e9ny"
      }, 
      {
        "id": "005547514", 
        "is_domestic": true, 
        "latitude": 46.4724344267609, 
        "legacy_id": 5184, 
        "longitude": 17.8367205152544, 
        "name": "Somodor"
      }, 
      {
        "id": "005508250", 
        "is_domestic": true, 
        "latitude": 46.4536885355168, 
        "legacy_id": 5185, 
        "longitude": 17.840468503704, 
        "name": "Somogyaszal\u00f3"
      }, 
      {
        "id": "005508441", 
        "is_domestic": true, 
        "latitude": 46.4907059910338, 
        "legacy_id": 5186, 
        "longitude": 17.6945153361362, 
        "name": "Somogyj\u00e1d"
      }, 
      {
        "id": "005508326", 
        "is_domestic": true, 
        "latitude": 46.7205344647712, 
        "legacy_id": 5187, 
        "longitude": 17.9207004369614, 
        "name": "Somogymeggyes"
      }, 
      {
        "id": "005549437", 
        "is_domestic": true, 
        "latitude": 46.6390506951733, 
        "legacy_id": 5189, 
        "longitude": 17.4783947217259, 
        "name": "Somogyszentp\u00e1l"
      }, 
      {
        "id": "005549429", 
        "is_domestic": true, 
        "latitude": 46.6490585629639, 
        "legacy_id": 5188, 
        "longitude": 17.4727850024355, 
        "name": "Somogyszentp\u00e1l fels\u0151"
      }, 
      {
        "id": "005506379", 
        "is_domestic": true, 
        "latitude": 46.2892825337923, 
        "legacy_id": 5190, 
        "longitude": 17.3069342611866, 
        "name": "Somogyszob"
      }, 
      {
        "id": "005505603", 
        "is_domestic": true, 
        "latitude": 46.1632337546227, 
        "legacy_id": 5191, 
        "longitude": 17.1794190925821, 
        "name": "Somogyudvarhely"
      }, 
      {
        "id": "005508474", 
        "is_domestic": true, 
        "latitude": 46.5805211774884, 
        "legacy_id": 5192, 
        "longitude": 17.6344945582709, 
        "name": "Somogyv\u00e1r"
      }, 
      {
        "id": "005511924", 
        "is_domestic": true, 
        "latitude": 48.1551911870954, 
        "legacy_id": 5193, 
        "longitude": 19.8158862407504, 
        "name": "Somosk\u0151\u00fajfalu"
      }, 
      {
        "id": "004302725", 
        "is_domestic": true, 
        "latitude": 47.6781433935374, 
        "legacy_id": 5200, 
        "longitude": 16.586719414139, 
        "name": "Sopron"
      }, 
      {
        "id": "004305199", 
        "is_domestic": true, 
        "latitude": 47.547344, 
        "legacy_id": 5204, 
        "longitude": 16.748813, 
        "name": "Sopronk\u00f6vesd"
      }, 
      {
        "id": "004302378_285", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5205, 
        "longitude": null, 
        "name": "Sopronn\u00e9meti (Szil-Sopronn\u00e9meti)"
      }, 
      {
        "id": "004305280", 
        "is_domestic": true, 
        "latitude": 47.1367219707989, 
        "legacy_id": 5206, 
        "longitude": 16.7200303439638, 
        "name": "Sorkifalud"
      }, 
      {
        "id": "005510322", 
        "is_domestic": true, 
        "latitude": 47.4022282827635, 
        "legacy_id": 5207, 
        "longitude": 19.1231723351807, 
        "name": "Soroks\u00e1r"
      }, 
      {
        "id": "005510116", 
        "is_domestic": true, 
        "latitude": 47.4584501421865, 
        "legacy_id": 5208, 
        "longitude": 19.0824768748454, 
        "name": "Soroks\u00e1ri \u00fat"
      }, 
      {
        "id": "005107465", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5210, 
        "longitude": null, 
        "name": "Sosnowiec Glowny"
      }, 
      {
        "id": "005514027", 
        "is_domestic": true, 
        "latitude": 47.9966299339921, 
        "legacy_id": 5215, 
        "longitude": 21.7283749976186, 
        "name": "S\u00f3st\u00f3"
      }, 
      {
        "id": "005514993_286", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6640, 
        "longitude": null, 
        "name": "S\u00f3st\u00f3f\u00fcrd\u0151 (Kony\u00e1ri S\u00f3st\u00f3f\u00fcrd\u0151)"
      }, 
      {
        "id": "005514035", 
        "is_domestic": true, 
        "latitude": 48.0122988030193, 
        "legacy_id": 5216, 
        "longitude": 21.7426979051931, 
        "name": "S\u00f3st\u00f3hegy"
      }, 
      {
        "id": "008103026", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7330, 
        "longitude": null, 
        "name": "St. Andr\u00e4 am Zicksee"
      }, 
      {
        "id": "008101222", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5245, 
        "longitude": null, 
        "name": "St.Anton Am Arlberg"
      }, 
      {
        "id": "007216503", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6609, 
        "longitude": null, 
        "name": "Stara Pazova"
      }, 
      {
        "id": "005436145", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5327, 
        "longitude": null, 
        "name": "Stare Mesto U Uher. Hradiste"
      }, 
      {
        "id": "008101032", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5271, 
        "longitude": null, 
        "name": "St.P\u00f6lten Hbf"
      }, 
      {
        "id": "002237740", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5405, 
        "longitude": null, 
        "name": "Stryi"
      }, 
      {
        "id": "008103500", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5407, 
        "longitude": null, 
        "name": "Studenzen-Fladnitz"
      }, 
      {
        "id": "005613526", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7913, 
        "longitude": null, 
        "name": "\u0160t\u00farovo"
      }, 
      {
        "id": "008029034", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5413, 
        "longitude": null, 
        "name": "Stuttgart Hbf"
      }, 
      {
        "id": "007223450", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5417, 
        "longitude": null, 
        "name": "Subotica"
      }, 
      {
        "id": "005507567", 
        "is_domestic": true, 
        "latitude": 45.9607230825262, 
        "legacy_id": 5434, 
        "longitude": 17.9117382058939, 
        "name": "Sumony"
      }, 
      {
        "id": "005332405", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5435, 
        "longitude": null, 
        "name": "Suncuius"
      }, 
      {
        "id": "005511601", 
        "is_domestic": true, 
        "latitude": 47.4518922873214, 
        "legacy_id": 5449, 
        "longitude": 19.5271068763932, 
        "name": "S\u00fclys\u00e1p"
      }, 
      {
        "id": "005504663", 
        "is_domestic": true, 
        "latitude": 46.9811529632833, 
        "legacy_id": 5450, 
        "longitude": 17.2709008096934, 
        "name": "S\u00fcmeg"
      }, 
      {
        "id": "005504655", 
        "is_domestic": true, 
        "latitude": 46.9522248787187, 
        "legacy_id": 5451, 
        "longitude": 17.2923718944161, 
        "name": "S\u00fcmegi Bazaltb\u00e1nya"
      }, 
      {
        "id": "005501552", 
        "is_domestic": true, 
        "latitude": 47.7611737686381, 
        "legacy_id": 5452, 
        "longitude": 18.4548812341833, 
        "name": "S\u00fctt\u0151"
      }, 
      {
        "id": "005540295", 
        "is_domestic": true, 
        "latitude": 47.7568154380448, 
        "legacy_id": 5453, 
        "longitude": 18.4373713553847, 
        "name": "S\u00fctt\u0151 fels\u0151"
      }, 
      {
        "id": "002238360", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5454, 
        "longitude": null, 
        "name": "Svaliava"
      }, 
      {
        "id": "005454333", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 9993, 
        "longitude": null, 
        "name": "Svitavy"
      }, 
      {
        "id": "005503285", 
        "is_domestic": true, 
        "latitude": 47.1055650743047, 
        "legacy_id": 5472, 
        "longitude": 18.3878737240969, 
        "name": "Szabadbatty\u00e1n"
      }, 
      {
        "id": "005505884", 
        "is_domestic": true, 
        "latitude": 47.0828266462381, 
        "legacy_id": 5473, 
        "longitude": 18.7044557071587, 
        "name": "Szabadegyh\u00e1za"
      }, 
      {
        "id": "005506221_287", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5474, 
        "longitude": null, 
        "name": "Szabadi (Csoma-Szabadi)"
      }, 
      {
        "id": "005503343", 
        "is_domestic": true, 
        "latitude": 46.9246101354649, 
        "legacy_id": 5475, 
        "longitude": 18.1004674260173, 
        "name": "Szabadif\u00fcrd\u0151"
      }, 
      {
        "id": "005503335", 
        "is_domestic": true, 
        "latitude": 46.9339542210376, 
        "legacy_id": 5476, 
        "longitude": 18.1182205805467, 
        "name": "Szabadis\u00f3st\u00f3"
      }, 
      {
        "id": "007223450_288", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5477, 
        "longitude": null, 
        "name": "Szabadka (Subotica)"
      }, 
      {
        "id": "005546052", 
        "is_domestic": true, 
        "latitude": 47.6258808160536, 
        "legacy_id": 5478, 
        "longitude": 18.8940495993663, 
        "name": "Szabads\u00e1gliget"
      }, 
      {
        "id": "005515123_289", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5479, 
        "longitude": null, 
        "name": "Szabads\u00e1gtelep (Debrecen-Szabads\u00e1gtelep)"
      }, 
      {
        "id": "005516220", 
        "is_domestic": true, 
        "latitude": 46.8705189240629, 
        "legacy_id": 5480, 
        "longitude": 19.2104010818818, 
        "name": "Szabadsz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005513771", 
        "is_domestic": true, 
        "latitude": 47.1705713046196, 
        "legacy_id": 5481, 
        "longitude": 20.2952622923217, 
        "name": "Szajol"
      }, 
      {
        "id": "005506130", 
        "is_domestic": true, 
        "latitude": 46.5238543284929, 
        "legacy_id": 5482, 
        "longitude": 18.3894379167156, 
        "name": "Szak\u00e1ly-H\u0151gy\u00e9sz"
      }, 
      {
        "id": "005542507_290", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5484, 
        "longitude": null, 
        "name": "Szalajkav\u00f6lgy (Szilv\u00e1sv\u00e1rad-Szalajkav\u00f6lgy)"
      }, 
      {
        "id": "005507039", 
        "is_domestic": true, 
        "latitude": 46.284463069817, 
        "legacy_id": 5485, 
        "longitude": 18.2887437665813, 
        "name": "Szalatnak"
      }, 
      {
        "id": "005546102_291", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6737, 
        "longitude": null, 
        "name": "Sz\u00e1ll\u00e1sok (Cegl\u00e9di sz\u00e1ll\u00e1sok)"
      }, 
      {
        "id": "005512989", 
        "is_domestic": true, 
        "latitude": 48.4487856187983, 
        "legacy_id": 5486, 
        "longitude": 20.7223997252447, 
        "name": "Szalonna"
      }, 
      {
        "id": "005344094_292", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5487, 
        "longitude": null, 
        "name": "Szamos\u00fajv\u00e1r (Gherla)"
      }, 
      {
        "id": "005518713_293", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6791, 
        "longitude": null, 
        "name": "Szanat\u00f3rium (J\u00f3zsef Szanat\u00f3rium)"
      }, 
      {
        "id": "005345270_294", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5488, 
        "longitude": null, 
        "name": "Szaniszl\u00f3 (Sanislau)"
      }, 
      {
        "id": "005503400", 
        "is_domestic": true, 
        "latitude": 46.8621633387734, 
        "legacy_id": 5489, 
        "longitude": 17.8995547193287, 
        "name": "Sz\u00e1nt\u00f3d-K\u0151r\u00f6shegy"
      }, 
      {
        "id": "005503079", 
        "is_domestic": true, 
        "latitude": 47.4606611695501, 
        "legacy_id": 5490, 
        "longitude": 17.3150884689917, 
        "name": "Szany-R\u00e1baszentandr\u00e1s"
      }, 
      {
        "id": "005501099", 
        "is_domestic": true, 
        "latitude": 47.4852553058468, 
        "legacy_id": 5491, 
        "longitude": 18.5272957043609, 
        "name": "Sz\u00e1r"
      }, 
      {
        "id": "005506114", 
        "is_domestic": true, 
        "latitude": 46.5753900228279, 
        "legacy_id": 5493, 
        "longitude": 18.4203184655605, 
        "name": "Sz\u00e1razd"
      }, 
      {
        "id": "004302600", 
        "is_domestic": true, 
        "latitude": 47.589272, 
        "legacy_id": 5494, 
        "longitude": 17.123527, 
        "name": "Sz\u00e1rf\u00f6ld"
      }, 
      {
        "id": "005501107", 
        "is_domestic": true, 
        "latitude": 47.5181344173424, 
        "legacy_id": 5495, 
        "longitude": 18.4963098520984, 
        "name": "Sz\u00e1rliget"
      }, 
      {
        "id": "005503426_295", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5497, 
        "longitude": null, 
        "name": "Sz\u00e1rsz\u00f3 (Balatonsz\u00e1rsz\u00f3)"
      }, 
      {
        "id": "005518259", 
        "is_domestic": true, 
        "latitude": 46.8605845401364, 
        "legacy_id": 5498, 
        "longitude": 20.5665388014256, 
        "name": "Szarvas"
      }, 
      {
        "id": "005512443", 
        "is_domestic": true, 
        "latitude": 47.9884258763279, 
        "legacy_id": 5499, 
        "longitude": 20.3325223423493, 
        "name": "Szarvask\u0151"
      }, 
      {
        "id": "005512070", 
        "is_domestic": true, 
        "latitude": 47.320806451175, 
        "legacy_id": 5500, 
        "longitude": 20.0913557532655, 
        "name": "Sz\u00e1szberek"
      }, 
      {
        "id": "005342474_296", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5501, 
        "longitude": null, 
        "name": "Sz\u00e1szr\u00e9gen (Reghin)"
      }, 
      {
        "id": "005320971_297", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5502, 
        "longitude": null, 
        "name": "Sz\u00e1szsebes (Sebes Alba)"
      }, 
      {
        "id": "005545476", 
        "is_domestic": true, 
        "latitude": 46.2872953590257, 
        "legacy_id": 5503, 
        "longitude": 18.3702721690753, 
        "name": "Sz\u00e1szv\u00e1r"
      }, 
      {
        "id": "005507054_298", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5504, 
        "longitude": null, 
        "name": "Sz\u00e1szv\u00e1r (M\u00e1za-Sz\u00e1szv\u00e1r)"
      }, 
      {
        "id": "005545401", 
        "is_domestic": true, 
        "latitude": 46.2026520338256, 
        "legacy_id": 5505, 
        "longitude": 18.0836914632008, 
        "name": "Szatina-Kishajm\u00e1s"
      }, 
      {
        "id": "005345438_299", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5506, 
        "longitude": null, 
        "name": "Szatm\u00e1rm\u00e9neti S\u00fcd (Satu Mare Sud)"
      }, 
      {
        "id": "005345452_300", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5507, 
        "longitude": null, 
        "name": "Szatm\u00e1rn\u00e9meti (Satu Mare)"
      }, 
      {
        "id": "005341884_301", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5508, 
        "longitude": null, 
        "name": "Szatm\u00e1rudvari (Odoreu)"
      }, 
      {
        "id": "005517186", 
        "is_domestic": true, 
        "latitude": 46.345648157436, 
        "legacy_id": 5509, 
        "longitude": 20.0437905844487, 
        "name": "Szatymaz"
      }, 
      {
        "id": "005505835", 
        "is_domestic": true, 
        "latitude": 47.3225793323929, 
        "legacy_id": 5510, 
        "longitude": 18.8993151054088, 
        "name": "Sz\u00e1zhalombatta"
      }, 
      {
        "id": "005510991", 
        "is_domestic": true, 
        "latitude": 48.0925864115002, 
        "legacy_id": 5513, 
        "longitude": 19.5213732156316, 
        "name": "Sz\u00e9cs\u00e9ny"
      }, 
      {
        "id": "005590997", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5514, 
        "longitude": null, 
        "name": "SZEGED*"
      }, 
      {
        "id": "005517228", 
        "is_domestic": true, 
        "latitude": 46.2402952465951, 
        "legacy_id": 5515, 
        "longitude": 20.1435523928416, 
        "name": "Szeged"
      }, 
      {
        "id": "005518531", 
        "is_domestic": true, 
        "latitude": 46.2665137120582, 
        "legacy_id": 5516, 
        "longitude": 20.1255031392257, 
        "name": "Szeged-R\u00f3kus"
      }, 
      {
        "id": "005518457", 
        "is_domestic": true, 
        "latitude": 47.0151309243488, 
        "legacy_id": 5517, 
        "longitude": 21.1483750055067, 
        "name": "Szeghalom"
      }, 
      {
        "id": "005513425", 
        "is_domestic": true, 
        "latitude": 48.2011349343544, 
        "legacy_id": 5518, 
        "longitude": 21.3866008090167, 
        "name": "Szegi"
      }, 
      {
        "id": "005513433_302", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6615, 
        "longitude": null, 
        "name": "Szegilong (Erd\u0151b\u00e9nye)"
      }, 
      {
        "id": "005518200", 
        "is_domestic": true, 
        "latitude": 46.5884583940295, 
        "legacy_id": 5519, 
        "longitude": 20.2493116288855, 
        "name": "Szegv\u00e1r"
      }, 
      {
        "id": "005345086_303", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5521, 
        "longitude": null, 
        "name": "Sz\u00e9kelyh\u00edd (Sacuieni Bihor)"
      }, 
      {
        "id": "005331774_304", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6742, 
        "longitude": null, 
        "name": "Sz\u00e9kelykocs\u00e1rd (R\u0103zboieni)"
      }, 
      {
        "id": "005503269", 
        "is_domestic": true, 
        "latitude": 47.183081876378, 
        "legacy_id": 5524, 
        "longitude": 18.4239956396851, 
        "name": "Sz\u00e9kesfeh\u00e9rv\u00e1r"
      }, 
      {
        "id": "005541095", 
        "is_domestic": true, 
        "latitude": 47.1586651628496, 
        "legacy_id": 5525, 
        "longitude": 18.4065816323946, 
        "name": "Sz\u00e9kesfeh\u00e9rv\u00e1r-Rep\u00fcl\u0151t\u00e9r"
      }, 
      {
        "id": "005518598", 
        "is_domestic": true, 
        "latitude": 46.5040410616713, 
        "legacy_id": 5526, 
        "longitude": 20.54113078936, 
        "name": "Sz\u00e9kkutas"
      }, 
      {
        "id": "005506767", 
        "is_domestic": true, 
        "latitude": 46.3494486168939, 
        "legacy_id": 5527, 
        "longitude": 18.7125527882088, 
        "name": "Szeksz\u00e1rd"
      }, 
      {
        "id": "005506759", 
        "is_domestic": true, 
        "latitude": 46.3809321556559, 
        "legacy_id": 5528, 
        "longitude": 18.7287040839604, 
        "name": "Szeksz\u00e1rd-Pal\u00e1nk"
      }, 
      {
        "id": "005517392", 
        "is_domestic": true, 
        "latitude": 46.8115779867556, 
        "legacy_id": 5529, 
        "longitude": 20.1958343757504, 
        "name": "Szelev\u00e9ny"
      }, 
      {
        "id": "005501428", 
        "is_domestic": true, 
        "latitude": 47.6014128950448, 
        "legacy_id": 7325, 
        "longitude": 18.9282391764308, 
        "name": "Sz\u00e9lhegy"
      }, 
      {
        "id": "005542440", 
        "is_domestic": true, 
        "latitude": 47.425881606801, 
        "legacy_id": 5530, 
        "longitude": 20.1894043049128, 
        "name": "Szell\u0151h\u00e1t"
      }, 
      {
        "id": "005513003", 
        "is_domestic": true, 
        "latitude": 47.4440605600989, 
        "legacy_id": 5531, 
        "longitude": 19.2126409608067, 
        "name": "Szemeretelep"
      }, 
      {
        "id": "005503434_305", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5532, 
        "longitude": null, 
        "name": "Szemes (Balatonszemes)"
      }, 
      {
        "id": "005512963", 
        "is_domestic": true, 
        "latitude": 48.4002428047069, 
        "legacy_id": 5535, 
        "longitude": 20.7215704988326, 
        "name": "Szendr\u0151"
      }, 
      {
        "id": "005512971", 
        "is_domestic": true, 
        "latitude": 48.4099106958543, 
        "legacy_id": 5536, 
        "longitude": 20.7200684894002, 
        "name": "Szendr\u0151 fels\u0151"
      }, 
      {
        "id": "005512955", 
        "is_domestic": true, 
        "latitude": 48.3343695433595, 
        "legacy_id": 5537, 
        "longitude": 20.731858629257, 
        "name": "Szendr\u0151l\u00e1d"
      }, 
      {
        "id": "005506395", 
        "is_domestic": true, 
        "latitude": 46.2734885865062, 
        "legacy_id": 5539, 
        "longitude": 17.1807669421449, 
        "name": "Szenta"
      }, 
      {
        "id": "005515172", 
        "is_domestic": true, 
        "latitude": 47.5199053611314, 
        "legacy_id": 5540, 
        "longitude": 21.9658774225479, 
        "name": "Szentannapuszta"
      }, 
      {
        "id": "005505769", 
        "is_domestic": true, 
        "latitude": 46.0366167991025, 
        "legacy_id": 5541, 
        "longitude": 17.9270765792637, 
        "name": "Szentd\u00e9nes"
      }, 
      {
        "id": "005518184", 
        "is_domestic": true, 
        "latitude": 46.6573850850127, 
        "legacy_id": 5542, 
        "longitude": 20.2723598087549, 
        "name": "Szentes"
      }, 
      {
        "id": "005517491", 
        "is_domestic": true, 
        "latitude": 46.5909585740781, 
        "legacy_id": 5543, 
        "longitude": 20.6281875890361, 
        "name": "Szentetornya"
      }, 
      {
        "id": "005503962", 
        "is_domestic": true, 
        "latitude": 47.1364277688605, 
        "legacy_id": 5544, 
        "longitude": 17.7072238471456, 
        "name": "Szentg\u00e1l"
      }, 
      {
        "id": "004302329", 
        "is_domestic": true, 
        "latitude": 46.9577028644945, 
        "legacy_id": 5545, 
        "longitude": 16.2645947214201, 
        "name": "Szentgotth\u00e1rd"
      }, 
      {
        "id": "004305298", 
        "is_domestic": true, 
        "latitude": 47.1217640691063, 
        "legacy_id": 5546, 
        "longitude": 16.7337543665887, 
        "name": "Szentl\u00e9r\u00e1nt"
      }, 
      {
        "id": "005507260", 
        "is_domestic": true, 
        "latitude": 46.033191005971, 
        "legacy_id": 5547, 
        "longitude": 17.9905370507974, 
        "name": "Szentl\u0151rinc"
      }, 
      {
        "id": "005511635", 
        "is_domestic": true, 
        "latitude": 47.4321631898683, 
        "legacy_id": 5548, 
        "longitude": 19.6805613681455, 
        "name": "Szentm\u00e1rtonk\u00e1ta"
      }, 
      {
        "id": "005504481_306", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5550, 
        "longitude": null, 
        "name": "Szepezd (Balatonszepezd)"
      }, 
      {
        "id": "005504499", 
        "is_domestic": true, 
        "latitude": 46.8397515951928, 
        "legacy_id": 5551, 
        "longitude": 17.6496342490535, 
        "name": "Szepezdf\u00fcrd\u0151"
      }, 
      {
        "id": "005503376_307", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5552, 
        "longitude": null, 
        "name": "Sz\u00e9plak als\u00f3 (Balatonsz\u00e9plak als\u00f3)"
      }, 
      {
        "id": "005503368_308", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5553, 
        "longitude": null, 
        "name": "Sz\u00e9plak fels\u0151 (Balatonsz\u00e9plak fels\u0151)"
      }, 
      {
        "id": "005502097", 
        "is_domestic": true, 
        "latitude": 47.4691094159466, 
        "legacy_id": 5555, 
        "longitude": 17.5474783111091, 
        "name": "Szerecseny"
      }, 
      {
        "id": "005511445", 
        "is_domestic": true, 
        "latitude": 48.1561502004423, 
        "legacy_id": 5557, 
        "longitude": 21.2149946849223, 
        "name": "Szerencs"
      }, 
      {
        "id": "005514308", 
        "is_domestic": true, 
        "latitude": 47.2344503212892, 
        "legacy_id": 5558, 
        "longitude": 21.1456564448468, 
        "name": "Szerep"
      }, 
      {
        "id": "005340971_309", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5559, 
        "longitude": null, 
        "name": "Szeretfalva (Saratel)"
      }, 
      {
        "id": "005505736", 
        "is_domestic": true, 
        "latitude": 46.0431603218422, 
        "legacy_id": 5560, 
        "longitude": 17.8024449843215, 
        "name": "Szigetv\u00e1r"
      }, 
      {
        "id": "005504572_310", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5561, 
        "longitude": null, 
        "name": "Szigliget (Badacsonyt\u00f6rdemic-Szigliget)"
      }, 
      {
        "id": "005511304", 
        "is_domestic": true, 
        "latitude": 47.7673779686485, 
        "legacy_id": 5562, 
        "longitude": 20.4927396359884, 
        "name": "Szihalom"
      }, 
      {
        "id": "005517277", 
        "is_domestic": true, 
        "latitude": 46.8582618004974, 
        "legacy_id": 5564, 
        "longitude": 19.9751962492574, 
        "name": "Szikra"
      }, 
      {
        "id": "005513144", 
        "is_domestic": true, 
        "latitude": 48.2017853621827, 
        "legacy_id": 5565, 
        "longitude": 20.9415541658847, 
        "name": "Sziksz\u00f3"
      }, 
      {
        "id": "005513136", 
        "is_domestic": true, 
        "latitude": 48.1930151463871, 
        "legacy_id": 5566, 
        "longitude": 20.9347482333737, 
        "name": "Sziksz\u00f3-V\u00e1s\u00e1rt\u00e9r"
      }, 
      {
        "id": "004302378", 
        "is_domestic": true, 
        "latitude": 47.533536793977, 
        "legacy_id": 5567, 
        "longitude": 17.2094915652819, 
        "name": "Szil-Sopronn\u00e9meti"
      }, 
      {
        "id": "005512492", 
        "is_domestic": true, 
        "latitude": 48.1134736130216, 
        "legacy_id": 5568, 
        "longitude": 20.3791280341977, 
        "name": "Szilv\u00e1sv\u00e1rad"
      }, 
      {
        "id": "005542507", 
        "is_domestic": true, 
        "latitude": 48.095574903427, 
        "legacy_id": 5569, 
        "longitude": 20.382659902954, 
        "name": "Szilv\u00e1sv\u00e1rad-Szalajkav\u00f6lgy"
      }, 
      {
        "id": "005513011_311", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6678, 
        "longitude": null, 
        "name": "Sz\u00edn (J\u00f3svaf\u0151-Aggtelek)"
      }, 
      {
        "id": "005341822_312", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5570, 
        "longitude": null, 
        "name": "Szin\u00e9rv\u00e1ralja (Seini)"
      }, 
      {
        "id": "005541764", 
        "is_domestic": true, 
        "latitude": 48.1492051927975, 
        "legacy_id": 5572, 
        "longitude": 20.7824254435536, 
        "name": "Szirmabeseny\u0151"
      }, 
      {
        "id": "005510504", 
        "is_domestic": true, 
        "latitude": 47.8212285878518, 
        "legacy_id": 5576, 
        "longitude": 18.862139618007, 
        "name": "Szob"
      }, 
      {
        "id": "005540865", 
        "is_domestic": true, 
        "latitude": 47.8166461988118, 
        "legacy_id": 5577, 
        "longitude": 18.8723532020081, 
        "name": "Szob als\u00f3"
      }, 
      {
        "id": "005510611", 
        "is_domestic": true, 
        "latitude": 47.8710390251209, 
        "legacy_id": 5579, 
        "longitude": 19.0305100274915, 
        "name": "Szokolya"
      }, 
      {
        "id": "005513748", 
        "is_domestic": true, 
        "latitude": 47.1781948726285, 
        "legacy_id": 5580, 
        "longitude": 20.1747674582124, 
        "name": "Szolnok"
      }, 
      {
        "id": "004302246", 
        "is_domestic": true, 
        "latitude": 47.2380330559316, 
        "legacy_id": 5581, 
        "longitude": 16.6321709937139, 
        "name": "Szombathely"
      }, 
      {
        "id": "004302253", 
        "is_domestic": true, 
        "latitude": 47.206379, 
        "legacy_id": 5582, 
        "longitude": 16.641889, 
        "name": "Szombathely-Sz\u0151l\u0151s"
      }, 
      {
        "id": "005546367", 
        "is_domestic": true, 
        "latitude": 47.9876424226277, 
        "legacy_id": 5584, 
        "longitude": 21.3668390752677, 
        "name": "Szorgalmatos"
      }, 
      {
        "id": "005510439_313", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5585, 
        "longitude": null, 
        "name": "Sz\u0151dliget (Sz\u0151d-Sz\u0151dliget)"
      }, 
      {
        "id": "005510439", 
        "is_domestic": true, 
        "latitude": 47.7279829158654, 
        "legacy_id": 5586, 
        "longitude": 19.1550058033247, 
        "name": "Sz\u0151d-Sz\u0151dliget"
      }, 
      {
        "id": "005507401", 
        "is_domestic": true, 
        "latitude": 45.9669084427906, 
        "legacy_id": 5587, 
        "longitude": 18.2905872519508, 
        "name": "Sz\u0151k\u00e9d"
      }, 
      {
        "id": "005540550_314", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6775, 
        "longitude": null, 
        "name": "Sz\u0151l\u0151hegy (Sereg\u00e9lyes-Sz\u0151l\u0151hegy)"
      }, 
      {
        "id": "004302253_315", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6703, 
        "longitude": null, 
        "name": "Sz\u0151l\u0151k (Szombathely-Sz\u0151l\u0151s)"
      }, 
      {
        "id": "005544586_316", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7455, 
        "longitude": null, 
        "name": "Sz\u0151l\u0151k (Kisteleki) (Kisteleki sz\u0151l\u0151k)"
      }, 
      {
        "id": "005544826_317", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7459, 
        "longitude": null, 
        "name": "Sz\u0151l\u0151k (Ny\u00e1rl\u0151rinci) (Ny\u00e1rl\u0151rinci sz\u0151l\u0151k)"
      }, 
      {
        "id": "005516295_318", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7461, 
        "longitude": null, 
        "name": "Sz\u0151l\u0151k (Pirt\u00f3i) (Pirt\u00f3i sz\u0151l\u0151k)"
      }, 
      {
        "id": "005511593", 
        "is_domestic": true, 
        "latitude": 47.4507697002386, 
        "legacy_id": 5588, 
        "longitude": 19.5594859138864, 
        "name": "Sz\u0151l\u0151snyaral\u00f3"
      }, 
      {
        "id": "005511593_319", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5589, 
        "longitude": null, 
        "name": "Sz\u0151l\u0151telep (Sz\u0151l\u0151snyaral\u00f3)"
      }, 
      {
        "id": "005501198", 
        "is_domestic": true, 
        "latitude": 47.7355970775159, 
        "legacy_id": 5590, 
        "longitude": 18.1771131555462, 
        "name": "Sz\u0151ny"
      }, 
      {
        "id": "005503814", 
        "is_domestic": true, 
        "latitude": 47.7367042181144, 
        "legacy_id": 5591, 
        "longitude": 18.1430862487897, 
        "name": "Sz\u0151ny-D\u00e9li"
      }, 
      {
        "id": "005518952", 
        "is_domestic": true, 
        "latitude": 46.2109913751918, 
        "legacy_id": 5592, 
        "longitude": 20.1829237405109, 
        "name": "Sz\u0151reg"
      }, 
      {
        "id": "005511700", 
        "is_domestic": true, 
        "latitude": 47.8515108556224, 
        "legacy_id": 5594, 
        "longitude": 19.6903815796104, 
        "name": "Szurdokp\u00fcsp\u00f6ki"
      }, 
      {
        "id": "005510959", 
        "is_domestic": true, 
        "latitude": 48.0363081313741, 
        "legacy_id": 5595, 
        "longitude": 19.3329696352178, 
        "name": "Sz\u00fcgy"
      }, 
      {
        "id": "005508342", 
        "is_domestic": true, 
        "latitude": 46.7341569856434, 
        "legacy_id": 5596, 
        "longitude": 18.0412125323599, 
        "name": "Tab"
      }, 
      {
        "id": "005544958", 
        "is_domestic": true, 
        "latitude": 46.6797824990904, 
        "legacy_id": 5599, 
        "longitude": 19.2824156531821, 
        "name": "Tabdi"
      }, 
      {
        "id": "005516881", 
        "is_domestic": true, 
        "latitude": 47.0985656985683, 
        "legacy_id": 5600, 
        "longitude": 19.4793382282726, 
        "name": "T\u00e1borfalva"
      }, 
      {
        "id": "005516741", 
        "is_domestic": true, 
        "latitude": 46.4725528403256, 
        "legacy_id": 5603, 
        "longitude": 19.6500750369628, 
        "name": "Taj\u00f3"
      }, 
      {
        "id": "008103498", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5605, 
        "longitude": null, 
        "name": "Takern-St.Margareth."
      }, 
      {
        "id": "005516147", 
        "is_domestic": true, 
        "latitude": 47.3205267252572, 
        "legacy_id": 5606, 
        "longitude": 19.0767515869702, 
        "name": "Taksony"
      }, 
      {
        "id": "005511429", 
        "is_domestic": true, 
        "latitude": 48.0918619441442, 
        "legacy_id": 5607, 
        "longitude": 21.1293172263527, 
        "name": "Taktahark\u00e1ny"
      }, 
      {
        "id": "005511437", 
        "is_domestic": true, 
        "latitude": 48.112437324215, 
        "legacy_id": 5608, 
        "longitude": 21.149569772141, 
        "name": "Taktaszada"
      }, 
      {
        "id": "005513284", 
        "is_domestic": true, 
        "latitude": 48.2282561975482, 
        "legacy_id": 5611, 
        "longitude": 21.2231965411873, 
        "name": "T\u00e1llya"
      }, 
      {
        "id": "005517764_320", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6710, 
        "longitude": null, 
        "name": "T.alp\u00e1r (Tiszaalp\u00e1r)"
      }, 
      {
        "id": "005517772_321", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6688, 
        "longitude": null, 
        "name": "T.alp\u00e1r als\u00f3 (Tiszaalp\u00e1r als\u00f3)"
      }, 
      {
        "id": "005544768_322", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6668, 
        "longitude": null, 
        "name": "T.alp\u00e1r fels\u0151 (Tiszaalp\u00e1r fels\u0151)"
      }, 
      {
        "id": "005345000", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5613, 
        "longitude": null, 
        "name": "Tamaseu"
      }, 
      {
        "id": "005515354", 
        "is_domestic": true, 
        "latitude": 47.6327295074306, 
        "legacy_id": 5614, 
        "longitude": 21.7960199615992, 
        "name": "Tam\u00e1sipuszta"
      }, 
      {
        "id": "005544875_323", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7448, 
        "longitude": null, 
        "name": "Tany\u00e1k (Csongr\u00e1di \u00fati) (Csongr\u00e1di \u00fati tany\u00e1k)"
      }, 
      {
        "id": "005518622_324", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7454, 
        "longitude": null, 
        "name": "Tany\u00e1k (Orosh\u00e1zi) (Orosh\u00e1zi tany\u00e1k)"
      }, 
      {
        "id": "005544578_325", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7445, 
        "longitude": null, 
        "name": "Tany\u00e1k (Pet\u0151fisz\u00e1ll\u00e1si) (Pet\u0151fisz\u00e1ll\u00e1si tany\u00e1k)"
      }, 
      {
        "id": "005511684", 
        "is_domestic": true, 
        "latitude": 47.3248409009454, 
        "legacy_id": 5618, 
        "longitude": 19.9501242516116, 
        "name": "T\u00e1pi\u00f3gy\u00f6rgye"
      }, 
      {
        "id": "005511627", 
        "is_domestic": true, 
        "latitude": 47.4432221028793, 
        "legacy_id": 5619, 
        "longitude": 19.6142958258736, 
        "name": "T\u00e1pi\u00f3szecs\u0151"
      }, 
      {
        "id": "005511676", 
        "is_domestic": true, 
        "latitude": 47.3460935567057, 
        "legacy_id": 5620, 
        "longitude": 19.8736878803058, 
        "name": "T\u00e1pi\u00f3szele"
      }, 
      {
        "id": "005542234", 
        "is_domestic": true, 
        "latitude": 47.3733848457019, 
        "legacy_id": 5621, 
        "longitude": 19.7979601630995, 
        "name": "T\u00e1pi\u00f3szentm\u00e1rton"
      }, 
      {
        "id": "005504598", 
        "is_domestic": true, 
        "latitude": 46.8768357006952, 
        "legacy_id": 5622, 
        "longitude": 17.4292106388961, 
        "name": "Tapolca"
      }, 
      {
        "id": "005511825", 
        "is_domestic": true, 
        "latitude": 47.9564028937129, 
        "legacy_id": 5623, 
        "longitude": 19.7471586334212, 
        "name": "Tar"
      }, 
      {
        "id": "005511460", 
        "is_domestic": true, 
        "latitude": 48.1252215653099, 
        "legacy_id": 5624, 
        "longitude": 21.3400064491565, 
        "name": "Tarcal"
      }, 
      {
        "id": "005342606", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6794, 
        "longitude": null, 
        "name": "T\u00e2rgu Mure\u015f"
      }, 
      {
        "id": "005502949", 
        "is_domestic": true, 
        "latitude": 47.504720333323, 
        "legacy_id": 5636, 
        "longitude": 17.7888799156872, 
        "name": "Tarj\u00e1npuszta"
      }, 
      {
        "id": "005512302", 
        "is_domestic": true, 
        "latitude": 47.547102275744, 
        "legacy_id": 5638, 
        "longitude": 20.3900317657898, 
        "name": "Tarnaszentmikl\u00f3s"
      }, 
      {
        "id": "005503160", 
        "is_domestic": true, 
        "latitude": 47.365685806968, 
        "legacy_id": 5641, 
        "longitude": 18.8737827274947, 
        "name": "T\u00e1rnok"
      }, 
      {
        "id": "005516204_326", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5648, 
        "longitude": null, 
        "name": "Tass (Kunszentmikl\u00f3s-Tass)"
      }, 
      {
        "id": "005506262", 
        "is_domestic": true, 
        "latitude": 46.3636781931445, 
        "legacy_id": 5650, 
        "longitude": 17.8937122207205, 
        "name": "Tasz\u00e1r"
      }, 
      {
        "id": "005540279", 
        "is_domestic": true, 
        "latitude": 47.7413995810778, 
        "legacy_id": 5651, 
        "longitude": 18.6474330545995, 
        "name": "T\u00e1t"
      }, 
      {
        "id": "005501164", 
        "is_domestic": true, 
        "latitude": 47.6636856714797, 
        "legacy_id": 5652, 
        "longitude": 18.3275717751993, 
        "name": "Tata"
      }, 
      {
        "id": "005501131", 
        "is_domestic": true, 
        "latitude": 47.5866354198856, 
        "legacy_id": 5653, 
        "longitude": 18.3922146039013, 
        "name": "Tatab\u00e1nya"
      }, 
      {
        "id": "005508490", 
        "is_domestic": true, 
        "latitude": 46.6365929460346, 
        "legacy_id": 5655, 
        "longitude": 17.6209667217933, 
        "name": "Tat\u00e1rv\u00e1r"
      }, 
      {
        "id": "005514167_327", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6764, 
        "longitude": null, 
        "name": "T.bezd\u00e9d (Tiszabezd\u00e9d)"
      }, 
      {
        "id": "005514720", 
        "is_domestic": true, 
        "latitude": 47.9033378840123, 
        "legacy_id": 5673, 
        "longitude": 21.4041389105228, 
        "name": "Tedej"
      }, 
      {
        "id": "005513961", 
        "is_domestic": true, 
        "latitude": 47.7146205202579, 
        "legacy_id": 5675, 
        "longitude": 21.6846016403559, 
        "name": "T\u00e9gl\u00e1s"
      }, 
      {
        "id": "005545369_328", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5680, 
        "longitude": null, 
        "name": "Tekerespuszta (Polg\u00e1rdi-Tekerespuszta)"
      }, 
      {
        "id": "005518655", 
        "is_domestic": true, 
        "latitude": 46.6560161427389, 
        "legacy_id": 5686, 
        "longitude": 20.9639705196524, 
        "name": "Telekgerend\u00e1s"
      }, 
      {
        "id": "005311906_329", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6627, 
        "longitude": null, 
        "name": "Temesv\u00e1r (Timi\u015foara Nord)"
      }, 
      {
        "id": "005506718", 
        "is_domestic": true, 
        "latitude": 46.515846358108, 
        "legacy_id": 5693, 
        "longitude": 18.6954158696848, 
        "name": "Tengelic"
      }, 
      {
        "id": "005514894_330", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6642, 
        "longitude": null, 
        "name": "T.eszl\u00e1r (Tiszaeszl\u00e1r)"
      }, 
      {
        "id": "005502071_331", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5704, 
        "longitude": null, 
        "name": "T\u00e9t (Gy\u00f6m\u00f6re-T\u00e9t)"
      }, 
      {
        "id": "005503145", 
        "is_domestic": true, 
        "latitude": 47.3848146945634, 
        "legacy_id": 5706, 
        "longitude": 18.9545349756584, 
        "name": "T\u00e9t\u00e9nyliget"
      }, 
      {
        "id": "005518101_332", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6716, 
        "longitude": null, 
        "name": "T.f\u00f6ldv\u00e1r (Tiszaf\u00f6ldv\u00e1r)"
      }, 
      {
        "id": "005514563_333", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6652, 
        "longitude": null, 
        "name": "T.f\u00fcred (Tiszaf\u00fcred)"
      }, 
      {
        "id": "005515990", 
        "is_domestic": true, 
        "latitude": 47.8151814246871, 
        "legacy_id": 5719, 
        "longitude": 22.4030201994399, 
        "name": "Tiborsz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005504416_334", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5723, 
        "longitude": null, 
        "name": "Tihany (Balatonf\u00fcred)"
      }, 
      {
        "id": "005311906", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6689, 
        "longitude": null, 
        "name": "Timi\u015foara Nord"
      }, 
      {
        "id": "005342606_335", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6797, 
        "longitude": null, 
        "name": "Tirgu Mures (T\u00e2rgu Mure\u015f)"
      }, 
      {
        "id": "005517764", 
        "is_domestic": true, 
        "latitude": 46.8185980754882, 
        "legacy_id": 5746, 
        "longitude": 19.9824985263068, 
        "name": "Tiszaalp\u00e1r"
      }, 
      {
        "id": "005517772", 
        "is_domestic": true, 
        "latitude": 46.7908744888187, 
        "legacy_id": 5747, 
        "longitude": 19.9514267814546, 
        "name": "Tiszaalp\u00e1r als\u00f3"
      }, 
      {
        "id": "005544768", 
        "is_domestic": true, 
        "latitude": 46.8362376872961, 
        "legacy_id": 5748, 
        "longitude": 19.9766667492061, 
        "name": "Tiszaalp\u00e1r fels\u0151"
      }, 
      {
        "id": "005514167", 
        "is_domestic": true, 
        "latitude": 48.3711470048626, 
        "legacy_id": 5749, 
        "longitude": 22.1452705122808, 
        "name": "Tiszabezd\u00e9d"
      }, 
      {
        "id": "005514894", 
        "is_domestic": true, 
        "latitude": 48.0106639863749, 
        "legacy_id": 5751, 
        "longitude": 21.4921039683185, 
        "name": "Tiszaeszl\u00e1r"
      }, 
      {
        "id": "005518101", 
        "is_domestic": true, 
        "latitude": 46.9756749894644, 
        "legacy_id": 5752, 
        "longitude": 20.276498704268, 
        "name": "Tiszaf\u00f6ldv\u00e1r"
      }, 
      {
        "id": "005514563", 
        "is_domestic": true, 
        "latitude": 47.6277789025994, 
        "legacy_id": 5753, 
        "longitude": 20.7559992109878, 
        "name": "Tiszaf\u00fcred"
      }, 
      {
        "id": "005543984", 
        "is_domestic": true, 
        "latitude": 47.6160617055977, 
        "legacy_id": 5754, 
        "longitude": 20.7370903302081, 
        "name": "Tiszaf\u00fcred-Gy\u00e1rtelep"
      }, 
      {
        "id": "005544859_336", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6788, 
        "longitude": null, 
        "name": "Tiszah\u00eddf\u0151 (Tiszaug-Tiszah\u00eddf\u0151)"
      }, 
      {
        "id": "005511387_337", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6720, 
        "longitude": null, 
        "name": "Tiszai (Miskolc-Tiszai)"
      }, 
      {
        "id": "005544727", 
        "is_domestic": true, 
        "latitude": 47.0166846319245, 
        "legacy_id": 5755, 
        "longitude": 20.1343044502239, 
        "name": "Tiszajen\u0151 als\u00f3"
      }, 
      {
        "id": "005517723", 
        "is_domestic": true, 
        "latitude": 47.0362827408868, 
        "legacy_id": 5756, 
        "longitude": 20.1425002933255, 
        "name": "Tiszajen\u0151-Vezseny"
      }, 
      {
        "id": "005517749", 
        "is_domestic": true, 
        "latitude": 46.9374524379146, 
        "legacy_id": 5757, 
        "longitude": 20.0819416432353, 
        "name": "Tiszak\u00e9cske"
      }, 
      {
        "id": "005514860", 
        "is_domestic": true, 
        "latitude": 48.0130149965017, 
        "legacy_id": 5758, 
        "longitude": 21.3695352497113, 
        "name": "Tiszal\u00f6k"
      }, 
      {
        "id": "005511411", 
        "is_domestic": true, 
        "latitude": 48.0394386155354, 
        "legacy_id": 5759, 
        "longitude": 21.0563868694128, 
        "name": "Tiszal\u00fac"
      }, 
      {
        "id": "005517376", 
        "is_domestic": true, 
        "latitude": 46.8258108080647, 
        "legacy_id": 5760, 
        "longitude": 20.0894326921058, 
        "name": "Tiszasas"
      }, 
      {
        "id": "005514241", 
        "is_domestic": true, 
        "latitude": 47.4908974323472, 
        "legacy_id": 5761, 
        "longitude": 20.7331635868146, 
        "name": "Tiszaszentimre"
      }, 
      {
        "id": "005514258", 
        "is_domestic": true, 
        "latitude": 47.5552907976871, 
        "legacy_id": 5762, 
        "longitude": 20.7280474402012, 
        "name": "Tiszasz\u0151l\u0151s"
      }, 
      {
        "id": "005517806", 
        "is_domestic": true, 
        "latitude": 47.1355190617286, 
        "legacy_id": 5763, 
        "longitude": 20.3695748290742, 
        "name": "Tiszateny\u0151"
      }, 
      {
        "id": "005517293", 
        "is_domestic": true, 
        "latitude": 46.8504899547547, 
        "legacy_id": 5764, 
        "longitude": 20.0737086504097, 
        "name": "Tiszaug"
      }, 
      {
        "id": "005544859", 
        "is_domestic": true, 
        "latitude": 46.8661524675669, 
        "legacy_id": 5765, 
        "longitude": 20.05218320906, 
        "name": "Tiszaug-Tiszah\u00eddf\u0151"
      }, 
      {
        "id": "005512567", 
        "is_domestic": true, 
        "latitude": 47.9259784735213, 
        "legacy_id": 5766, 
        "longitude": 21.0304237083922, 
        "name": "Tisza\u00fajv\u00e1ros"
      }, 
      {
        "id": "005517715", 
        "is_domestic": true, 
        "latitude": 47.0593705401664, 
        "legacy_id": 6620, 
        "longitude": 20.142896899638, 
        "name": "Tiszav\u00e1rkony"
      }, 
      {
        "id": "005514738", 
        "is_domestic": true, 
        "latitude": 47.9453532546822, 
        "legacy_id": 5767, 
        "longitude": 21.3749166356885, 
        "name": "Tiszavasv\u00e1ri"
      }, 
      {
        "id": "005544081", 
        "is_domestic": true, 
        "latitude": 47.6444369513027, 
        "legacy_id": 5768, 
        "longitude": 21.8238893206802, 
        "name": "Tisztav\u00edz"
      }, 
      {
        "id": "005544727_338", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6659, 
        "longitude": null, 
        "name": "T.jen\u0151 (Tiszajen\u0151 als\u00f3)"
      }, 
      {
        "id": "005517749_339", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6822, 
        "longitude": null, 
        "name": "T.k\u00e9cske (Tiszak\u00e9cske)"
      }, 
      {
        "id": "005514860_340", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6856, 
        "longitude": null, 
        "name": "T.l\u00f6k (Tiszal\u00f6k)"
      }, 
      {
        "id": "005511411_341", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6810, 
        "longitude": null, 
        "name": "T.l\u00fac (Tiszal\u00fac)"
      }, 
      {
        "id": "005514456", 
        "is_domestic": true, 
        "latitude": 47.5291123828197, 
        "legacy_id": 5773, 
        "longitude": 21.5888818208548, 
        "name": "T\u00f3c\u00f3v\u00f6lgy"
      }, 
      {
        "id": "005504945", 
        "is_domestic": true, 
        "latitude": 46.6700278434691, 
        "legacy_id": 5776, 
        "longitude": 16.8002975904035, 
        "name": "T\u00f3fej"
      }, 
      {
        "id": "005511478", 
        "is_domestic": true, 
        "latitude": 48.1127305858847, 
        "legacy_id": 5777, 
        "longitude": 21.4070223910372, 
        "name": "Tokaj"
      }, 
      {
        "id": "005501628", 
        "is_domestic": true, 
        "latitude": 47.7349045379207, 
        "legacy_id": 5778, 
        "longitude": 18.6745679619043, 
        "name": "Tokod"
      }, 
      {
        "id": "005506742", 
        "is_domestic": true, 
        "latitude": 46.4147877513243, 
        "legacy_id": 5780, 
        "longitude": 18.7501341958603, 
        "name": "Tolna-M\u00f6zs"
      }, 
      {
        "id": "005505975", 
        "is_domestic": true, 
        "latitude": 46.7278744344345, 
        "legacy_id": 5781, 
        "longitude": 18.4762394665171, 
        "name": "Tolnan\u00e9medi"
      }, 
      {
        "id": "005504549_342", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5782, 
        "longitude": null, 
        "name": "Tomaj (Badacsonytomaj)"
      }, 
      {
        "id": "005516345", 
        "is_domestic": true, 
        "latitude": 46.2334026473288, 
        "legacy_id": 5786, 
        "longitude": 19.5771829814058, 
        "name": "Tompa"
      }, 
      {
        "id": "005544388", 
        "is_domestic": true, 
        "latitude": 46.321482015775, 
        "legacy_id": 5787, 
        "longitude": 20.9665469920413, 
        "name": "Tompapuszta"
      }, 
      {
        "id": "005340684", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5790, 
        "longitude": null, 
        "name": "Toplita"
      }, 
      {
        "id": "007223404_343", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5796, 
        "longitude": null, 
        "name": "Topolya (Backa Topola)"
      }, 
      {
        "id": "005508243", 
        "is_domestic": true, 
        "latitude": 46.3957099925087, 
        "legacy_id": 5797, 
        "longitude": 17.8398622136662, 
        "name": "Topon\u00e1r"
      }, 
      {
        "id": "004345971", 
        "is_domestic": true, 
        "latitude": 47.43025, 
        "legacy_id": 5804, 
        "longitude": 16.781801, 
        "name": "Torm\u00e1sliget"
      }, 
      {
        "id": "005513045", 
        "is_domestic": true, 
        "latitude": 48.5582758905402, 
        "legacy_id": 5807, 
        "longitude": 20.7873284319411, 
        "name": "Tornan\u00e1daska"
      }, 
      {
        "id": "005515883", 
        "is_domestic": true, 
        "latitude": 48.2684640468839, 
        "legacy_id": 5808, 
        "longitude": 22.2018391589237, 
        "name": "Tornyosp\u00e1lca"
      }, 
      {
        "id": "005517707", 
        "is_domestic": true, 
        "latitude": 47.098024543485, 
        "legacy_id": 5809, 
        "longitude": 20.1385685913803, 
        "name": "T\u00f3szeg"
      }, 
      {
        "id": "005518374", 
        "is_domestic": true, 
        "latitude": 46.4087859862717, 
        "legacy_id": 5810, 
        "longitude": 20.7270403877578, 
        "name": "T\u00f3tkoml\u00f3s"
      }, 
      {
        "id": "005501156", 
        "is_domestic": true, 
        "latitude": 47.6468450724102, 
        "legacy_id": 5814, 
        "longitude": 18.3478680599364, 
        "name": "T\u00f3v\u00e1roskert"
      }, 
      {
        "id": "005540139", 
        "is_domestic": true, 
        "latitude": 47.4498895727213, 
        "legacy_id": 5816, 
        "longitude": 18.9105312296876, 
        "name": "T\u00f6r\u00f6kb\u00e1lint"
      }, 
      {
        "id": "005513789", 
        "is_domestic": true, 
        "latitude": 47.1700156915956, 
        "legacy_id": 5817, 
        "longitude": 20.4125196128604, 
        "name": "T\u00f6r\u00f6kszentmikl\u00f3s"
      }, 
      {
        "id": "005544750", 
        "is_domestic": true, 
        "latitude": 46.8510743341163, 
        "legacy_id": 5819, 
        "longitude": 19.979739392303, 
        "name": "T\u0151serd\u0151"
      }, 
      {
        "id": "007942203", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5840, 
        "longitude": null, 
        "name": "Trbovlje"
      }, 
      {
        "id": "007872404", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5865, 
        "longitude": null, 
        "name": "Trnava (Cro)"
      }, 
      {
        "id": "005517376_344", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6727, 
        "longitude": null, 
        "name": "T.sas (Tiszasas)"
      }, 
      {
        "id": "005514241_345", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6629, 
        "longitude": null, 
        "name": "T.szentimre (Tiszaszentimre)"
      }, 
      {
        "id": "005514258_346", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6780, 
        "longitude": null, 
        "name": "T.sz\u0151l\u0151s (Tiszasz\u0151l\u0151s)"
      }, 
      {
        "id": "005517806_347", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6747, 
        "longitude": null, 
        "name": "T.teny\u0151 (Tiszateny\u0151)"
      }, 
      {
        "id": "005517293_348", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6759, 
        "longitude": null, 
        "name": "T.ug (Tiszaug)"
      }, 
      {
        "id": "005512567_349", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6719, 
        "longitude": null, 
        "name": "T.\u00fajv\u00e1ros (Tisza\u00fajv\u00e1ros)"
      }, 
      {
        "id": "005515743", 
        "is_domestic": true, 
        "latitude": 47.9605862095022, 
        "legacy_id": 5896, 
        "longitude": 22.4426738427623, 
        "name": "Tunyogmatolcs"
      }, 
      {
        "id": "005515750", 
        "is_domestic": true, 
        "latitude": 47.9660582407167, 
        "legacy_id": 5897, 
        "longitude": 22.4644887574685, 
        "name": "Tunyogmatolcs als\u00f3"
      }, 
      {
        "id": "005511197", 
        "is_domestic": true, 
        "latitude": 47.6262445790564, 
        "legacy_id": 5898, 
        "longitude": 19.5970658953563, 
        "name": "Tura"
      }, 
      {
        "id": "005340256_350", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6832, 
        "longitude": null, 
        "name": "Tusn\u00e1df\u00fcrd\u0151 (B\u0103ile Tu\u015fnad)"
      }, 
      {
        "id": "005514159", 
        "is_domestic": true, 
        "latitude": 48.3424546793927, 
        "legacy_id": 5921, 
        "longitude": 22.1317479239269, 
        "name": "Tuzs\u00e9r"
      }, 
      {
        "id": "005504838", 
        "is_domestic": true, 
        "latitude": 46.9950074055976, 
        "legacy_id": 5923, 
        "longitude": 17.0947068081153, 
        "name": "T\u00fcrje"
      }, 
      {
        "id": "005504069", 
        "is_domestic": true, 
        "latitude": 47.1287689883244, 
        "legacy_id": 5924, 
        "longitude": 17.3313966327291, 
        "name": "T\u00fcskev\u00e1r"
      }, 
      {
        "id": "005517715_351", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6735, 
        "longitude": null, 
        "name": "T.v\u00e1rkony (Tiszav\u00e1rkony)"
      }, 
      {
        "id": "005514738_352", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6818, 
        "longitude": null, 
        "name": "T.vasv\u00e1ri (Tiszavasv\u00e1ri)"
      }, 
      {
        "id": "005107370", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7365, 
        "longitude": null, 
        "name": "Tychy"
      }, 
      {
        "id": "005515552_353", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5929, 
        "longitude": null, 
        "name": "Tyukod (Porcsalma-Tyukod)"
      }, 
      {
        "id": "005504440_354", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 5934, 
        "longitude": null, 
        "name": "Udvari (Balatonudvari)"
      }, 
      {
        "id": "007216003_355", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5939, 
        "longitude": null, 
        "name": "\u00dajbelgr\u00e1d (Novi Beograd)"
      }, 
      {
        "id": "005517731", 
        "is_domestic": true, 
        "latitude": 46.9620409896138, 
        "legacy_id": 5940, 
        "longitude": 20.0936034122364, 
        "name": "\u00dajb\u00f6g"
      }, 
      {
        "id": "005513987", 
        "is_domestic": true, 
        "latitude": 47.8156311746194, 
        "legacy_id": 5941, 
        "longitude": 21.7062689036787, 
        "name": "\u00dajfeh\u00e9rt\u00f3"
      }, 
      {
        "id": "005544073", 
        "is_domestic": true, 
        "latitude": 48.2511482060282, 
        "legacy_id": 5944, 
        "longitude": 22.2215094665077, 
        "name": "\u00dajken\u00e9z"
      }, 
      {
        "id": "004305223", 
        "is_domestic": true, 
        "latitude": 47.457743, 
        "legacy_id": 5945, 
        "longitude": 16.786697, 
        "name": "\u00dajk\u00e9r"
      }, 
      {
        "id": "005510140_356", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6836, 
        "longitude": null, 
        "name": "\u00dajpest (R\u00e1kospalota-\u00dajpest)"
      }, 
      {
        "id": "005510207", 
        "is_domestic": true, 
        "latitude": 47.5587079843391, 
        "legacy_id": 7312, 
        "longitude": 19.0796399880464, 
        "name": "\u00dajpest"
      }, 
      {
        "id": "005511692", 
        "is_domestic": true, 
        "latitude": 47.2857613200618, 
        "legacy_id": 5948, 
        "longitude": 20.0671023671554, 
        "name": "\u00dajsz\u00e1sz"
      }, 
      {
        "id": "005518945", 
        "is_domestic": true, 
        "latitude": 46.2420296531142, 
        "legacy_id": 5949, 
        "longitude": 20.1601445398176, 
        "name": "\u00dajszeged"
      }, 
      {
        "id": "005511098_357", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7456, 
        "longitude": null, 
        "name": "\u00dajtelep (R\u00e1koscsaba) (R\u00e1koscsaba-\u00dajtelep)"
      }, 
      {
        "id": "005505488", 
        "is_domestic": true, 
        "latitude": 46.5192793848797, 
        "legacy_id": 5950, 
        "longitude": 16.9803277899534, 
        "name": "\u00dajudvar"
      }, 
      {
        "id": "005542879", 
        "is_domestic": true, 
        "latitude": 46.660541400636, 
        "legacy_id": 5951, 
        "longitude": 20.5361598935129, 
        "name": "\u00dajv\u00e1ros"
      }, 
      {
        "id": "005506528", 
        "is_domestic": true, 
        "latitude": 46.9371710638198, 
        "legacy_id": 5952, 
        "longitude": 18.8716216412562, 
        "name": "\u00dajvenyim"
      }, 
      {
        "id": "007216808_358", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5953, 
        "longitude": null, 
        "name": "\u00dajvid\u00e9k (Novi Sad)"
      }, 
      {
        "id": "005504689", 
        "is_domestic": true, 
        "latitude": 47.0405239415002, 
        "legacy_id": 5954, 
        "longitude": 17.1964960221806, 
        "name": "Ukk"
      }, 
      {
        "id": "008029103", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5957, 
        "longitude": null, 
        "name": "Ulm Hbf"
      }, 
      {
        "id": "005544693", 
        "is_domestic": true, 
        "latitude": 46.9179745337907, 
        "legacy_id": 5987, 
        "longitude": 19.6205857660596, 
        "name": "\u00darihegy"
      }, 
      {
        "id": "005453179", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 5994, 
        "longitude": null, 
        "name": "Usti Nad Labem hl. n."
      }, 
      {
        "id": "005453863", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7935, 
        "longitude": null, 
        "name": "Usti Nad Orlici"
      }, 
      {
        "id": "005504630", 
        "is_domestic": true, 
        "latitude": 46.9203777154698, 
        "legacy_id": 6004, 
        "longitude": 17.3317249948183, 
        "name": "Uzsa"
      }, 
      {
        "id": "005504622", 
        "is_domestic": true, 
        "latitude": 46.8982542587393, 
        "legacy_id": 6005, 
        "longitude": 17.3452668532528, 
        "name": "Uzsab\u00e1nya als\u00f3"
      }, 
      {
        "id": "005504333_359", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7370, 
        "longitude": null, 
        "name": "\u00dcd\u00fcl\u0151telep (Csitt\u00e9nyhegy)"
      }, 
      {
        "id": "005513649", 
        "is_domestic": true, 
        "latitude": 47.3906667581074, 
        "legacy_id": 6010, 
        "longitude": 19.3508537520962, 
        "name": "\u00dcll\u0151"
      }, 
      {
        "id": "005501412", 
        "is_domestic": true, 
        "latitude": 47.58069852744, 
        "legacy_id": 7311, 
        "longitude": 19.002094371661, 
        "name": "\u00dcr\u00f6m"
      }, 
      {
        "id": "005544438_360", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6847, 
        "longitude": null, 
        "name": "\u00dcveggy\u00e1r (Orosh\u00e1za-\u00dcveggy\u00e1r)"
      }, 
      {
        "id": "005510447", 
        "is_domestic": true, 
        "latitude": 47.782436724598, 
        "legacy_id": 6012, 
        "longitude": 19.1331657716191, 
        "name": "V\u00e1c"
      }, 
      {
        "id": "005540816", 
        "is_domestic": true, 
        "latitude": 47.7724780396757, 
        "legacy_id": 6013, 
        "longitude": 19.1504866152071, 
        "name": "V\u00e1c-Als\u00f3v\u00e1ros"
      }, 
      {
        "id": "005510595", 
        "is_domestic": true, 
        "latitude": 47.7253239668509, 
        "legacy_id": 6015, 
        "longitude": 19.2495400775821, 
        "name": "V\u00e1charty\u00e1n"
      }, 
      {
        "id": "005510835", 
        "is_domestic": true, 
        "latitude": 47.7327205785477, 
        "legacy_id": 6016, 
        "longitude": 19.2178151477796, 
        "name": "V\u00e1cr\u00e1t\u00f3t"
      }, 
      {
        "id": "005512807", 
        "is_domestic": true, 
        "latitude": 48.2763035821161, 
        "legacy_id": 6018, 
        "longitude": 20.5556020190732, 
        "name": "Vadna"
      }, 
      {
        "id": "004302394_361", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6019, 
        "longitude": null, 
        "name": "Vadosfa (P\u00e1li-Vadosfa)"
      }, 
      {
        "id": "005515719", 
        "is_domestic": true, 
        "latitude": 48.0063148584655, 
        "legacy_id": 6031, 
        "longitude": 22.1636911994483, 
        "name": "Vaja-Rohod"
      }, 
      {
        "id": "005506668", 
        "is_domestic": true, 
        "latitude": 46.7142429719149, 
        "legacy_id": 6032, 
        "longitude": 18.6481682560626, 
        "name": "Vajta"
      }, 
      {
        "id": "005345153", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7595, 
        "longitude": null, 
        "name": "Valea lui Mihai"
      }, 
      {
        "id": "004302444", 
        "is_domestic": true, 
        "latitude": 47.3853653943335, 
        "legacy_id": 6067, 
        "longitude": 16.9610065205568, 
        "name": "V\u00e1moscsal\u00e1d"
      }, 
      {
        "id": "005511239", 
        "is_domestic": true, 
        "latitude": 47.6859363602019, 
        "legacy_id": 6068, 
        "longitude": 19.9280575965284, 
        "name": "V\u00e1mosgy\u00f6rk"
      }, 
      {
        "id": "005515164", 
        "is_domestic": true, 
        "latitude": 47.5179636231317, 
        "legacy_id": 6069, 
        "longitude": 21.8939393361655, 
        "name": "V\u00e1mosp\u00e9rcs"
      }, 
      {
        "id": "005513441_362", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6617, 
        "longitude": null, 
        "name": "V\u00e1mos\u00fajfalu (Olaszliszka-Tolcsva)"
      }, 
      {
        "id": "005507062", 
        "is_domestic": true, 
        "latitude": 46.2810991114265, 
        "legacy_id": 6077, 
        "longitude": 18.4362508594735, 
        "name": "V\u00e1ralja"
      }, 
      {
        "id": "005508433", 
        "is_domestic": true, 
        "latitude": 46.4604898239507, 
        "legacy_id": 6083, 
        "longitude": 17.7248605469556, 
        "name": "V\u00e1rda"
      }, 
      {
        "id": "005540899", 
        "is_domestic": true, 
        "latitude": 47.7375877827522, 
        "legacy_id": 6084, 
        "longitude": 18.366973179428, 
        "name": "V\u00e1rhegyalja"
      }, 
      {
        "id": "005544479_363", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6649, 
        "longitude": null, 
        "name": "V\u00e1roserd\u0151 (Gyulai v\u00e1roserd\u0151)"
      }, 
      {
        "id": "005517129", 
        "is_domestic": true, 
        "latitude": 46.8157676763213, 
        "legacy_id": 6089, 
        "longitude": 19.7536834757845, 
        "name": "V\u00e1rosf\u00f6ld"
      }, 
      {
        "id": "005542903", 
        "is_domestic": true, 
        "latitude": 46.6975791608176, 
        "legacy_id": 6090, 
        "longitude": 19.8658404481807, 
        "name": "V\u00e1rosi park"
      }, 
      {
        "id": "005503970", 
        "is_domestic": true, 
        "latitude": 47.1443525242286, 
        "legacy_id": 6091, 
        "longitude": 17.6532171720376, 
        "name": "V\u00e1rosl\u0151d"
      }, 
      {
        "id": "005503988", 
        "is_domestic": true, 
        "latitude": 47.1342972811172, 
        "legacy_id": 6092, 
        "longitude": 17.6316901288345, 
        "name": "V\u00e1rosl\u0151d-Kisl\u0151d"
      }, 
      {
        "id": "005503871", 
        "is_domestic": true, 
        "latitude": 47.1948274748365, 
        "legacy_id": 6093, 
        "longitude": 18.1489681557999, 
        "name": "V\u00e1rpalota"
      }, 
      {
        "id": "005507195", 
        "is_domestic": true, 
        "latitude": 46.3102434551487, 
        "legacy_id": 6097, 
        "longitude": 18.1383610656939, 
        "name": "V\u00e1s\u00e1rosdomb\u00f3"
      }, 
      {
        "id": "005515933", 
        "is_domestic": true, 
        "latitude": 48.1266362103919, 
        "legacy_id": 6098, 
        "longitude": 22.3058227138072, 
        "name": "V\u00e1s\u00e1rosnam\u00e9ny"
      }, 
      {
        "id": "005542598", 
        "is_domestic": true, 
        "latitude": 48.0822342402612, 
        "legacy_id": 6099, 
        "longitude": 22.2512319791734, 
        "name": "V\u00e1s\u00e1rosnam\u00e9ny k\u00fcls\u0151"
      }, 
      {
        "id": "005514969_364", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7463, 
        "longitude": null, 
        "name": "V\u00e1s\u00e1rt\u00e9r (Derecske) (Derecske-V\u00e1s\u00e1rt\u00e9r)"
      }, 
      {
        "id": "005514712_365", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7450, 
        "longitude": null, 
        "name": "V\u00e1s\u00e1rt\u00e9r (Hajd\u00fan\u00e1n\u00e1s) (Hajd\u00fan\u00e1n\u00e1s-V\u00e1s\u00e1rt\u00e9r)"
      }, 
      {
        "id": "005544305_366", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7447, 
        "longitude": null, 
        "name": "V\u00e1s\u00e1rt\u00e9r (P\u00fcsp\u00f6klad\u00e1ny) (P\u00fcsp\u00f6klad\u00e1ny-V\u00e1s\u00e1rt\u00e9r)"
      }, 
      {
        "id": "005513136_367", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 7460, 
        "longitude": null, 
        "name": "V\u00e1s\u00e1rt\u00e9r (Sziksz\u00f3) (Sziksz\u00f3-V\u00e1s\u00e1rt\u00e9r)"
      }, 
      {
        "id": "004305355_368", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6100, 
        "longitude": null, 
        "name": "Vasboldogasszony (Egerv\u00e1r-Vasboldogasszony)"
      }, 
      {
        "id": "004302451", 
        "is_domestic": true, 
        "latitude": 47.3748861961615, 
        "legacy_id": 6101, 
        "longitude": 16.9289579894866, 
        "name": "Vasegerszeg"
      }, 
      {
        "id": "004305264_369", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6104, 
        "longitude": null, 
        "name": "Vass\u00far\u00e1ny (Salk\u00f6vesk\u00fat-Vassur\u00e1ny)"
      }, 
      {
        "id": "005541145", 
        "is_domestic": true, 
        "latitude": 47.544089076783, 
        "legacy_id": 7361, 
        "longitude": 19.0992686831699, 
        "name": "Vas\u00fatm\u00fazeum"
      }, 
      {
        "id": "004305314", 
        "is_domestic": true, 
        "latitude": 47.0569617090778, 
        "legacy_id": 6105, 
        "longitude": 16.8003486148714, 
        "name": "Vasv\u00e1r"
      }, 
      {
        "id": "005502113", 
        "is_domestic": true, 
        "latitude": 47.4025781208171, 
        "legacy_id": 6106, 
        "longitude": 17.4964659352402, 
        "name": "Vaszar"
      }, 
      {
        "id": "005513623", 
        "is_domestic": true, 
        "latitude": 47.4085764076476, 
        "legacy_id": 6111, 
        "longitude": 19.2563337391374, 
        "name": "Vecs\u00e9s"
      }, 
      {
        "id": "005513631", 
        "is_domestic": true, 
        "latitude": 47.4033802172787, 
        "legacy_id": 6112, 
        "longitude": 19.272815053448, 
        "name": "Vecs\u00e9s-Kertekalja"
      }, 
      {
        "id": "004333021_370", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6113, 
        "longitude": null, 
        "name": "V\u00e9deny (Weiden am See)"
      }, 
      {
        "id": "005519174", 
        "is_domestic": true, 
        "latitude": 46.3849860016013, 
        "legacy_id": 6115, 
        "longitude": 20.8792661611237, 
        "name": "V\u00e9gegyh\u00e1za"
      }, 
      {
        "id": "005544321", 
        "is_domestic": true, 
        "latitude": 46.367080829731, 
        "legacy_id": 6116, 
        "longitude": 20.866842589687, 
        "name": "V\u00e9gegyh\u00e1za als\u00f3"
      }, 
      {
        "id": "005503210", 
        "is_domestic": true, 
        "latitude": 47.2269045048639, 
        "legacy_id": 6121, 
        "longitude": 18.6638445394052, 
        "name": "Velence"
      }, 
      {
        "id": "005503228", 
        "is_domestic": true, 
        "latitude": 47.218581260332, 
        "legacy_id": 6124, 
        "longitude": 18.6481089428632, 
        "name": "Velencef\u00fcrd\u0151"
      }, 
      {
        "id": "004302238", 
        "is_domestic": true, 
        "latitude": 47.2358229758465, 
        "legacy_id": 6162, 
        "longitude": 16.7268236673159, 
        "name": "V\u00e9p"
      }, 
      {
        "id": "007212214_371", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Verb\u00e1sz (Vrbas (YU))"
      }, 
      {
        "id": "005510561", 
        "is_domestic": true, 
        "latitude": 47.6491783804845, 
        "legacy_id": 6167, 
        "longitude": 19.2887343938882, 
        "name": "Veresegyh\u00e1z"
      }, 
      {
        "id": "005510454", 
        "is_domestic": true, 
        "latitude": 47.8237829165333, 
        "legacy_id": 6172, 
        "longitude": 19.0317281190995, 
        "name": "Ver\u0151ce"
      }, 
      {
        "id": "005501149", 
        "is_domestic": true, 
        "latitude": 47.6188536814889, 
        "legacy_id": 6174, 
        "longitude": 18.3763348046007, 
        "name": "V\u00e9rtessz\u0151l\u0151s"
      }, 
      {
        "id": "004302618", 
        "is_domestic": true, 
        "latitude": 47.587042, 
        "legacy_id": 6179, 
        "longitude": 17.09924, 
        "name": "Veszk\u00e9ny"
      }, 
      {
        "id": "005503947", 
        "is_domestic": true, 
        "latitude": 47.1190236175095, 
        "legacy_id": 6180, 
        "longitude": 17.9115017727249, 
        "name": "Veszpr\u00e9m"
      }, 
      {
        "id": "005502964", 
        "is_domestic": true, 
        "latitude": 47.4432439070159, 
        "legacy_id": 6181, 
        "longitude": 17.8184287779052, 
        "name": "Veszpr\u00e9mvars\u00e1ny"
      }, 
      {
        "id": "005518465", 
        "is_domestic": true, 
        "latitude": 46.9389503290607, 
        "legacy_id": 6182, 
        "longitude": 21.2634649488909, 
        "name": "V\u00e9szt\u0151"
      }, 
      {
        "id": "005517723_372", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6185, 
        "longitude": null, 
        "name": "Vezseny (Tiszajen\u0151-Vezseny)"
      }, 
      {
        "id": "004345674", 
        "is_domestic": true, 
        "latitude": 47.4777831105162, 
        "legacy_id": 6188, 
        "longitude": 17.1116946342615, 
        "name": "Vica"
      }, 
      {
        "id": "005540980", 
        "is_domestic": true, 
        "latitude": 47.6758668873645, 
        "legacy_id": 6189, 
        "longitude": 19.2860459762262, 
        "name": "Viczi\u00e1ntelep"
      }, 
      {
        "id": "005310287", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6192, 
        "longitude": null, 
        "name": "Videle"
      }, 
      {
        "id": "008108000_373", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6198, 
        "longitude": null, 
        "name": "Vienna (WIEN*)"
      }, 
      {
        "id": "005503327_374", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6204, 
        "longitude": null, 
        "name": "Vil\u00e1gos (Balatonvil\u00e1gos)"
      }, 
      {
        "id": "005517269", 
        "is_domestic": true, 
        "latitude": 46.8552838168515, 
        "legacy_id": 6205, 
        "longitude": 19.9398519963592, 
        "name": "Vil\u00e1goshegy"
      }, 
      {
        "id": "005507468", 
        "is_domestic": true, 
        "latitude": 45.8771974686636, 
        "legacy_id": 6210, 
        "longitude": 18.4516127188355, 
        "name": "Vill\u00e1ny"
      }, 
      {
        "id": "005507450", 
        "is_domestic": true, 
        "latitude": 45.8797540284781, 
        "legacy_id": 6211, 
        "longitude": 18.4262220378588, 
        "name": "Vill\u00e1nyk\u00f6vesd"
      }, 
      {
        "id": "005513367_375", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6216, 
        "longitude": null, 
        "name": "Vilm\u00e1ny (Hejce-Vilm\u00e1ny)"
      }, 
      {
        "id": "005544628", 
        "is_domestic": true, 
        "latitude": 46.3665884451432, 
        "legacy_id": 6217, 
        "longitude": 20.0307903619423, 
        "name": "Vilmasz\u00e1ll\u00e1s"
      }, 
      {
        "id": "005502154", 
        "is_domestic": true, 
        "latitude": 47.3058654477002, 
        "legacy_id": 6220, 
        "longitude": 17.2824944202312, 
        "name": "Vin\u00e1r"
      }, 
      {
        "id": "005321028", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6226, 
        "longitude": null, 
        "name": "Vintu De Jos"
      }, 
      {
        "id": "005545724", 
        "is_domestic": true, 
        "latitude": 47.3603490325133, 
        "legacy_id": 6227, 
        "longitude": 17.8196395697406, 
        "name": "Vinye"
      }, 
      {
        "id": "005543752", 
        "is_domestic": true, 
        "latitude": 48.0679164262261, 
        "legacy_id": 6229, 
        "longitude": 21.5260234770805, 
        "name": "Vir\u00e1nyos"
      }, 
      {
        "id": "005510470_376", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6233, 
        "longitude": null, 
        "name": "Visegr\u00e1d (Nagymaros-Visegr\u00e1d)"
      }, 
      {
        "id": "005515941", 
        "is_domestic": true, 
        "latitude": 48.0954924297979, 
        "legacy_id": 6243, 
        "longitude": 22.3081801475685, 
        "name": "Vitka"
      }, 
      {
        "id": "004302634", 
        "is_domestic": true, 
        "latitude": 47.582006, 
        "legacy_id": 6245, 
        "longitude": 16.986886, 
        "name": "Vitny\u00e9d-Csermajor"
      }, 
      {
        "id": "005541558_377", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6639, 
        "longitude": null, 
        "name": "V\u00edzm\u0171 (B\u00e1nr\u00e9vei V\u00edzm\u0171)"
      }, 
      {
        "id": "005513342_378", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6249, 
        "longitude": null, 
        "name": "Vizsoly (Korl\u00e1t-Vizsoly)"
      }, 
      {
        "id": "005505629", 
        "is_domestic": true, 
        "latitude": 46.1013404821309, 
        "legacy_id": 6248, 
        "longitude": 17.2392425831919, 
        "name": "V\u00edzv\u00e1r"
      }, 
      {
        "id": "007873105", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6262, 
        "longitude": null, 
        "name": "Vojakovacki Klostar"
      }, 
      {
        "id": "005507435", 
        "is_domestic": true, 
        "latitude": 45.8993281097948, 
        "legacy_id": 6264, 
        "longitude": 18.3343105769263, 
        "name": "Vok\u00e1ny"
      }, 
      {
        "id": "002238370", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6269, 
        "longitude": null, 
        "name": "Volovec"
      }, 
      {
        "id": "005504770", 
        "is_domestic": true, 
        "latitude": 46.7553676162502, 
        "legacy_id": 6271, 
        "longitude": 17.3180057464478, 
        "name": "Vonyarcvashegy"
      }, 
      {
        "id": "005501433", 
        "is_domestic": true, 
        "latitude": 47.610686632729, 
        "legacy_id": 7326, 
        "longitude": 18.9125068638272, 
        "name": "V\u00f6r\u00f6sv\u00e1rb\u00e1nya"
      }, 
      {
        "id": "005503574", 
        "is_domestic": true, 
        "latitude": 46.6628915994209, 
        "legacy_id": 6282, 
        "longitude": 17.2596774336271, 
        "name": "V\u00f6rs"
      }, 
      {
        "id": "007212214", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6289, 
        "longitude": null, 
        "name": "Vrbas (YU)"
      }, 
      {
        "id": "007873110", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6292, 
        "longitude": null, 
        "name": "Vrbovec"
      }, 
      {
        "id": "008133027", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6328, 
        "longitude": null, 
        "name": "Wallern Am Neusiedlersee"
      }, 
      {
        "id": "005103362", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6339, 
        "longitude": null, 
        "name": "WARSZAWA*"
      }, 
      {
        "id": "005103360", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6340, 
        "longitude": null, 
        "name": "Warszawa Centralna"
      }, 
      {
        "id": "005103865", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6341, 
        "longitude": null, 
        "name": "Warszawa Wschodnia"
      }, 
      {
        "id": "005103350", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6342, 
        "longitude": null, 
        "name": "Warszawa Zachodnia"
      }, 
      {
        "id": "004333021", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6354, 
        "longitude": null, 
        "name": "Weiden am See"
      }, 
      {
        "id": "008101081", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6368, 
        "longitude": null, 
        "name": "Wels Hbf"
      }, 
      {
        "id": "008108000", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6382, 
        "longitude": null, 
        "name": "WIEN*"
      }, 
      {
        "id": "008102961", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6385, 
        "longitude": null, 
        "name": "Wien Grillgasse"
      }, 
      {
        "id": "008101003_379", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6608, 
        "longitude": null, 
        "name": "Wien Hauptbahnhof (Wien Hbf)"
      }, 
      {
        "id": "008101003", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6389, 
        "longitude": null, 
        "name": "Wien Hbf"
      }, 
      {
        "id": "008103107", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6391, 
        "longitude": null, 
        "name": "Wien Meidling"
      }, 
      {
        "id": "008027317", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6430, 
        "longitude": null, 
        "name": "Wittenberge"
      }, 
      {
        "id": "005106489", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6433, 
        "longitude": null, 
        "name": "Wloszczowa Polnoc"
      }, 
      {
        "id": "005106840", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Wodzislaw Slaski"
      }, 
      {
        "id": "008101170", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6447, 
        "longitude": null, 
        "name": "W\u00f6rgl"
      }, 
      {
        "id": "005106010", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6450, 
        "longitude": null, 
        "name": "Wroclaw Glowny"
      }, 
      {
        "id": "008133214", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6454, 
        "longitude": null, 
        "name": "Wulkaprodersdorf (Roeee)"
      }, 
      {
        "id": "007942204", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6469, 
        "longitude": null, 
        "name": "Zagorje"
      }, 
      {
        "id": "007872480_380", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6470, 
        "longitude": null, 
        "name": "Z\u00e1gr\u00e1b (Zagreb Glavni Kol.)"
      }, 
      {
        "id": "007872480", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6471, 
        "longitude": null, 
        "name": "Zagreb Glavni Kol."
      }, 
      {
        "id": "005511882", 
        "is_domestic": true, 
        "latitude": 48.0675356314763, 
        "legacy_id": 6473, 
        "longitude": 19.785232844944, 
        "name": "Zagyvap\u00e1lfalva"
      }, 
      {
        "id": "005542275", 
        "is_domestic": true, 
        "latitude": 47.2443025049979, 
        "legacy_id": 6474, 
        "longitude": 20.0975052314454, 
        "name": "Zagyvar\u00e9kas"
      }, 
      {
        "id": "005511767_381", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6475, 
        "longitude": null, 
        "name": "Zagyvasz\u00e1nt\u00f3 (Apc-Zagyvasz\u00e1nt\u00f3)"
      }, 
      {
        "id": "005514175", 
        "is_domestic": true, 
        "latitude": 48.402062843744, 
        "legacy_id": 6476, 
        "longitude": 22.1837940716242, 
        "name": "Z\u00e1hony"
      }, 
      {
        "id": "005515826", 
        "is_domestic": true, 
        "latitude": 47.9028581858641, 
        "legacy_id": 6478, 
        "longitude": 22.7953111239732, 
        "name": "Zajta"
      }, 
      {
        "id": "005505579", 
        "is_domestic": true, 
        "latitude": 46.2551003141358, 
        "legacy_id": 6479, 
        "longitude": 16.9381213707605, 
        "name": "Z\u00e1k\u00e1ny"
      }, 
      {
        "id": "005504846", 
        "is_domestic": true, 
        "latitude": 46.9831731019833, 
        "legacy_id": 6482, 
        "longitude": 17.0406500166626, 
        "name": "Zalab\u00e9r-Batyk"
      }, 
      {
        "id": "005505132", 
        "is_domestic": true, 
        "latitude": 46.8581847015649, 
        "legacy_id": 6483, 
        "longitude": 16.6614792791995, 
        "name": "Zalacs\u00e9b-Salomv\u00e1r"
      }, 
      {
        "id": "005504895", 
        "is_domestic": true, 
        "latitude": 46.8342403206607, 
        "legacy_id": 6484, 
        "longitude": 16.8479537761621, 
        "name": "Zalaegerszeg"
      }, 
      {
        "id": "005505090", 
        "is_domestic": true, 
        "latitude": 46.8510245281578, 
        "legacy_id": 6485, 
        "longitude": 16.83717944906, 
        "name": "Zalaegerszeg-Ola"
      }, 
      {
        "id": "005545856", 
        "is_domestic": true, 
        "latitude": 47.0110529131662, 
        "legacy_id": 6486, 
        "longitude": 17.2208508843884, 
        "name": "Zalagy\u00f6m\u00f6r\u0151"
      }, 
      {
        "id": "005503657", 
        "is_domestic": true, 
        "latitude": 46.5301807341515, 
        "legacy_id": 6487, 
        "longitude": 17.1879281212867, 
        "name": "Zalakom\u00e1r"
      }, 
      {
        "id": "005505033", 
        "is_domestic": true, 
        "latitude": 46.845666506132, 
        "legacy_id": 6488, 
        "longitude": 16.5766790065869, 
        "name": "Zalal\u00f6v\u0151"
      }, 
      {
        "id": "005545963", 
        "is_domestic": true, 
        "latitude": 46.845529710312, 
        "legacy_id": 6489, 
        "longitude": 16.6040689471899, 
        "name": "Zalapatakalja"
      }, 
      {
        "id": "005505124", 
        "is_domestic": true, 
        "latitude": 46.8723729356977, 
        "legacy_id": 6490, 
        "longitude": 16.7123313773955, 
        "name": "Zalaszentgy\u00f6rgy"
      }, 
      {
        "id": "005505371", 
        "is_domestic": true, 
        "latitude": 46.8876232437968, 
        "legacy_id": 6491, 
        "longitude": 16.9094815952888, 
        "name": "Zalaszentiv\u00e1n"
      }, 
      {
        "id": "005503608", 
        "is_domestic": true, 
        "latitude": 46.4915688441045, 
        "legacy_id": 6492, 
        "longitude": 17.1352501662502, 
        "name": "Zalaszentjakab"
      }, 
      {
        "id": "004305363", 
        "is_domestic": true, 
        "latitude": 46.9140131870754, 
        "legacy_id": 6493, 
        "longitude": 16.8770408190899, 
        "name": "Zalaszentl\u0151rinc"
      }, 
      {
        "id": "005505413", 
        "is_domestic": true, 
        "latitude": 46.7232521946715, 
        "legacy_id": 6494, 
        "longitude": 16.9517996652167, 
        "name": "Zalaszentmih\u00e1ly-Pacsa"
      }, 
      {
        "id": "005503392", 
        "is_domestic": true, 
        "latitude": 46.8800791150527, 
        "legacy_id": 6500, 
        "longitude": 17.944890649106, 
        "name": "Zam\u00e1rdi"
      }, 
      {
        "id": "005503384", 
        "is_domestic": true, 
        "latitude": 46.8860262285713, 
        "legacy_id": 6501, 
        "longitude": 17.9694289129625, 
        "name": "Zam\u00e1rdi fels\u0151"
      }, 
      {
        "id": "005504309", 
        "is_domestic": true, 
        "latitude": 46.877782663886, 
        "legacy_id": 6504, 
        "longitude": 17.7110814336328, 
        "name": "Z\u00e1nkaf\u00fcrd\u0151"
      }, 
      {
        "id": "005504473", 
        "is_domestic": true, 
        "latitude": 46.8727638210912, 
        "legacy_id": 6505, 
        "longitude": 17.6879158729975, 
        "name": "Z\u00e1nka-K\u00f6vesk\u00e1l"
      }, 
      {
        "id": "005107530", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6519, 
        "longitude": null, 
        "name": "Zawiercie"
      }, 
      {
        "id": "005510496", 
        "is_domestic": true, 
        "latitude": 47.8008175082021, 
        "legacy_id": 6527, 
        "longitude": 18.9091147766999, 
        "name": "Zebeg\u00e9ny"
      }, 
      {
        "id": "005107550", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6529, 
        "longitude": null, 
        "name": "Zebrzydowice"
      }, 
      {
        "id": "005504895_382", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6705, 
        "longitude": null, 
        "name": "Z.egerszeg (Zalaegerszeg)"
      }, 
      {
        "id": "005514662", 
        "is_domestic": true, 
        "latitude": 47.626630288759, 
        "legacy_id": 6531, 
        "longitude": 21.578563888325, 
        "name": "Zelem\u00e9r"
      }, 
      {
        "id": "005545856_383", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6817, 
        "longitude": null, 
        "name": "Z.gy\u00f6m\u00f6r\u0151 (Zalagy\u00f6m\u00f6r\u0151)"
      }, 
      {
        "id": "005504259", 
        "is_domestic": true, 
        "latitude": 47.124606385847, 
        "legacy_id": 6543, 
        "longitude": 18.6721500644353, 
        "name": "Zichy\u00fajfalu"
      }, 
      {
        "id": "007942200", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6544, 
        "longitude": null, 
        "name": "Zidani Most"
      }, 
      {
        "id": "005102780", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": null, 
        "longitude": null, 
        "name": "Zielona Gora"
      }, 
      {
        "id": "005502998", 
        "is_domestic": true, 
        "latitude": 47.266525514275, 
        "legacy_id": 6552, 
        "longitude": 17.8779145268632, 
        "name": "Zirc"
      }, 
      {
        "id": "005503657_384", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6626, 
        "longitude": null, 
        "name": "Z.kom\u00e1r (Zalakom\u00e1r)"
      }, 
      {
        "id": "005505033_385", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6681, 
        "longitude": null, 
        "name": "Z.l\u00f6v\u0151 (Zalal\u00f6v\u0151)"
      }, 
      {
        "id": "005545963_386", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6725, 
        "longitude": null, 
        "name": "Z.patakalja (Zalapatakalja)"
      }, 
      {
        "id": "005506403", 
        "is_domestic": true, 
        "latitude": 46.2749951300746, 
        "legacy_id": 6574, 
        "longitude": 17.1401577969328, 
        "name": "Zr\u00ednyitelep"
      }, 
      {
        "id": "004302386_387", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6590, 
        "longitude": null, 
        "name": "Zsebeh\u00e1za (Magyarkereszt\u00far-Zsebeh\u00e1za)"
      }, 
      {
        "id": "005513391", 
        "is_domestic": true, 
        "latitude": 48.4925645235947, 
        "legacy_id": 6594, 
        "longitude": 21.2649825103549, 
        "name": "Zsujta"
      }, 
      {
        "id": "005505124_388", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6768, 
        "longitude": null, 
        "name": "Z.szentgy\u00f6rgy (Zalaszentgy\u00f6rgy)"
      }, 
      {
        "id": "005505371_389", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6841, 
        "longitude": null, 
        "name": "Z.szentiv\u00e1n (Zalaszentiv\u00e1n)"
      }, 
      {
        "id": "005510090", 
        "is_domestic": true, 
        "latitude": 47.5116316567079, 
        "legacy_id": 6576, 
        "longitude": 19.1008768727302, 
        "name": "Zugl\u00f3"
      }, 
      {
        "id": "008102978_390", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6577, 
        "longitude": null, 
        "name": "Zur\u00e1ny (Zurndorf)"
      }, 
      {
        "id": "008102978", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 6578, 
        "longitude": null, 
        "name": "Zurndorf"
      }, 
      {
        "id": "008503000", 
        "is_domestic": false, 
        "latitude": null, 
        "legacy_id": 7421, 
        "longitude": null, 
        "name": "Z\u00fcrich HB"
      }, 
      {
        "id": "005503608_391", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6851, 
        "longitude": null, 
        "name": "Z.zentjakab (Zalaszentjakab)"
      }, 
      {
        "id": "004305363_392", 
        "is_domestic": true, 
        "latitude": null, 
        "legacy_id": 6693, 
        "longitude": null, 
        "name": "Z.zentl\u0151rinc (Zalaszentl\u0151rinc)"
      }
    ];
}
