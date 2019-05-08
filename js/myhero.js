function formatUser(heroName, heroHp) {
    console.log(heroName);
    console.log(heroHp);

    if (!localStorage.getItem(user)) {
        localStorage.setItem('UserInfo', JSON.stringify(user));
    }

    return user;
}

var user = {

};
var heroName = prompt('Enter Name');


if (heroName && isNaN(heroName)){
    user.heroName = heroName;

    var heroHp = prompt('Enter your HP:');

    if (heroHp && !isNaN(parseInt(heroHp))){
        user.power = parseInt(heroHp);
    } else{
        alert('Enter valid HP');
    }
}else{
    alert('Enter a Valid Name');
}

var createUserObj = function (heroName, heroHp) {
    var userObj = {
        User: formatUser(heroName, heroHp)
    };
    return userObj; 
}(heroName, heroHp);
