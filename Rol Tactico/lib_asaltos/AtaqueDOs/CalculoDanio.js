<!-- CalculoDanio -->
[dialog("weaponInput"): {
  [h: weaponNum = getStrProp(macro.args, "Number")]
  [h: name = getStrProp(macro.args, "Name")]
  [h: bonus = getStrProp(macro.args, "Bonus")]
  [h: damage = getStrProp(macro.args, "Damage")]
  <!-- If we do not have a weapon number grab the next one -->
  [h, if(weaponNum == ""), code: {
    [h,macro("NextWeaponNumber@this"): ""]
    [h: weaponNum = macro.return]
  }]
  <html>
    <head>
      <title>Edit Weapon Dialog</title>
      <meta name="input" content="true">
    </head>
    <body>
      <form name="weaponInput" action="[r:macroLinkText('AddWeapon@Lib:Test')]">
        <table>
          <tr>
            <th>
              <label for="Name">Weapon Name</label>
            </th>
            <td>
              <input type="text" name="Name" value="[r: name]"></input> <br>
            </td>
          </tr>
          <tr>
            <th>
              <label for="Damage">Weapon Damage</label>
            </th>
            <td>
              <input type="text" name="Damage" value="[r: damage]"></input> <br>
            </td>
          </tr>
          <tr>
            <th>
              <label for="Bonus">Weapon Bonus</label>
            </th>
            <td>
              <input type="text" name="Bonus" value="[r: bonus]"></input>
            </td>
          </tr>
          </table>
        <!-- hidden input with the weapon number -->
        <input type="hidden" name="Number" value="[r: weaponNum]"></input>
 
        <input type="submit" name="Save" value="Save"> </input>
      </form>
    </body>
  </html>
}]