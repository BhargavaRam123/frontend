import Sec1button from "@/app/components/homecomponents/sec1button";
export default function Confirmationmodel({ data }) {
  return (
    <div>
      <div>{data.t1}</div>
      <div>{data.t2}</div>
      <div>
        <div
          onClick={() => {
            data.handler1();
          }}
        >
          <Sec1button button text="Logout" classname="sec1b1" />
        </div>
        <div
          onClick={() => {
            data.handler2();
          }}
        >
          <Sec1button text="Cancel" classname="sec1b2" />
        </div>
      </div>
    </div>
  );
}
