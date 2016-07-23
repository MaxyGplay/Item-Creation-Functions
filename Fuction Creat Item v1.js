///Fuction ModPE Item
///Creat by Maxy Gplay

fuction ItemsC(id,texture,name){
ModPE.setItem(id,texture,0,name,1);
Player.addItemCreativeInv(id);
}
///Ex
ItemC(512,"stick","Espada de Graveto");