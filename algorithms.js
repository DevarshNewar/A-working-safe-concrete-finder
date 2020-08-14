function isTouching(object1,object2) {
//making the collision
if (object1.x - object2.x < object2.width/2 + object1.width/2) {
    object2.velocityX = 0;
    damage = 0.5 * weight * speed * speed/22500;
    return true;
}else{
    return false;
}
}
  