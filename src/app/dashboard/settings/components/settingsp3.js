import Sec1button from "@/app/components/homecomponents/sec1button";
export default function Settingsp3() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Sec1button text="Cancel" classname="sec1b2" />
      <Sec1button text="Save" classname="sec1b1" />
    </div>
  );
}
