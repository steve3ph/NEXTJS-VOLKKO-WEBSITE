import clsx from "clsx";

function Office({ name, children, invert = false }) {
    return (
      <address
        className={clsx(
          "text-sm not-italic",
          invert ? "text-neutral-300" : "text-neutral-600"
        )}
      >
        <strong className={invert ? "text-white" : "text-neutral-950"}>
          {name}
        </strong>
        <br />
        {children}
      </address>
    );
  }



const Offices = ({ invert = false, ...props }) => {
  return (
    <ul>
        <li role="list" {...props}>
        <Office name="Kerala" invert={invert}>
        VOLKKOMMEN INDUSTRIES LLP
        <br />
        No. 6/858-M, 2nd Floor,
          <br />
          Valamkottil Towers, Judgemukku,
          <br />
          Kakkanad, Kochi - 682021
        </Office>
         </li>
         {/* <li>
        <Office name="London" invert={invert}>
          13 long Street
          <br />
          Downtown, Allyway
        </Office>
      </li> */}
    </ul>
  )
}

export default Offices