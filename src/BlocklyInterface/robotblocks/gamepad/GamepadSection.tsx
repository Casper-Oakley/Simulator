import { addGamepadBlocks } from "./GamepadBlocks";

export default (() => {
  addGamepadBlocks();

  return `
<category name="Gamepad">
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">A</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">AtRest</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">B</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">Back</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">DpadDown</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">DpadLeft</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">DpadRight</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">DpadUp</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">Guide</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">LeftBumper</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">LeftStickButton</field>
    </block>
    <block type="gamepad_getProperty_Number">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">LeftStickX</field>
    </block>
    <block type="gamepad_getProperty_Number">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">LeftStickY</field>
    </block>
    <block type="gamepad_getProperty_Number">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">LeftTrigger</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">RightBumper</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">RightStickButton</field>
    </block>
    <block type="gamepad_getProperty_Number">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">RightStickX</field>
    </block>
    <block type="gamepad_getProperty_Number">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">RightStickY</field>
    </block>
    <block type="gamepad_getProperty_Number">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">RightTrigger</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">Start</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">X</field>
    </block>
    <block type="gamepad_getProperty_Boolean">
      <field name="IDENTIFIER">gamepad1</field>
      <field name="PROP">Y</field>
    </block>
  </category>
`;
})();
