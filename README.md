# csvParser
A project that is intended for csv file to Laravel save() and mysql insert parser.

## Input CSV
```
first_name,last_name,grade
John,Doe,90
Jane,Doe,79 
"Spongy Bob",Sponge,95 
Johny,Bravo,100
```

## Output Laravel <code>save()</code>

```
use App\User; 

$user = new User(); 
$user->first_name = "John"; 
$user->last_name = "Doe"; 
$user->grade = "90";
$user->save(); 

$user = new User(); 
$user->first_name = "Jane"; 
$user->last_name = "Doe"; 
$user->grade = "79"; 
$user->save(); 

$user = new User(); 
$user->first_name = "Spongy Bob"; 
$user->last_name = "Sponge"; 
$user->grade = "95"; 
$user->save(); 

$user = new User(); 
$user->first_name = "Johny"; 
$user->last_name = "Bravo";
$user->grade = "100"; 
$user->save(); 
```

## Output MySQL
```
INSERT INTO `user`( `first_name`,`last_name`,`grade` ) VALUES
(`John`,`Doe`,`90`),
(`Jane`,`Doe`,`79`),
(`Spongy Bob`,`Sponge`,`95`),
(`Johny`,`Bravo`,`100`);
```
