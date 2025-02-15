import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { ImCross } from "react-icons/im";

/* Default Warrior Unit components appear inside Warbands after 'Add Unit' is selected, 
before the user selects the warrior they would like. */

export function DefaultWarriorUnit({
  setNewWarriorFocus,
  unitData,
  roster,
  setRoster,
  setHeroSelection,
  setDisplaySelection,
  warbandNum,
  setWarbandNumFocus,
}) {
  const handleClick = (e) => {
    /* Updates state variables to identify that a warrior (not a hero) is being chosen, 
    the warband that warrior belongs to, and that the unit selection menu should be display */
    setHeroSelection(false);
    setDisplaySelection(true);
    setWarbandNumFocus(warbandNum - 1);
    setNewWarriorFocus(unitData.id);
  };

  const handleDelete = (e) => {
    /* Removes the warband from the roster state variable, and stops displaying the unit selection menu. */
    e.stopPropagation();
    let newRoster = { ...roster };
    newRoster.warbands[warbandNum - 1].units = newRoster.warbands[
      warbandNum - 1
    ].units.filter((data) => data.id != unitData.id);
    setRoster(newRoster);
    setDisplaySelection(false);
  };

  return (
    <Button
      variant="light"
      className="p-2 m-1"
      style={{ width: "1100px", textAlign: "left" }}
      onClick={handleClick}
    >
      <Stack direction="horizontal" gap={3}>
        <img className="profile" src={require("../images/default.png")} />
        <p>
          <b>Choose a Warrior</b>
        </p>
        <Button
          onClick={handleDelete}
          className="ms-auto mt-auto"
          style={{ marginRight: "10px", marginBottom: "5px" }}
          variant={"warning"}
        >
          <ImCross />
        </Button>
      </Stack>
    </Button>
  );
}