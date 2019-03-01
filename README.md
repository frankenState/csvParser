# csvParser
A project that is intended for csv file to Laravel save() and mysql insert parser.

# Input CSV

<code>
first_name,last_name,grade <br>
John,Doe,90 <br>
Jane,Doe,79 <br>
"Spongy Bob",Sponge,95 <br>
Johny,Bravo,100 <br>
</code>

# Output Laravel save()

<code>
use App\User; <br>
<br>
$user = new User(); <br>
$user->first_name = "John"; <br>
$user->last_name = "Doe"; <br>
$user->grade = "90"; <br>
$user->save(); <br>
<br>
$user = new User(); <br>
$user->first_name = "Jane"; <br>
$user->last_name = "Doe"; <br>
$user->grade = "79"; <br>
$user->save(); <br>
<br>
$user = new User(); <br>
$user->first_name = "Spongy Bob"; <br>
$user->last_name = "Sponge"; <br>
$user->grade = "95"; <br>
$user->save(); <br>
<br>
$user = new User(); <br>
$user->first_name = "Johny"; <br>
$user->last_name = "Bravo"; <br>
$user->grade = "100"; <br>
$user->save(); <br>
</code>

# Output MySQL

<code>
INSERT INTO `user`( `first_name`,`last_name`,`grade` ) VALUES
(`John`,`Doe`,`90`),
(`Jane`,`Doe`,`79`),
(`Spongy Bob`,`Sponge`,`95`),
(`Johny`,`Bravo`,`100`);
</code>
