import React from "react";
import "./style.css";
export const Paragraph = ({ middle }) => {
  return (
    <div>
      <h2 className={middle}>O projektu</h2>
      <p className={middle}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam posuere
        lacus quis dolor. Duis risus. Mauris metus. In dapibus augue non sapien.
        Integer in sapien. In sem justo, commodo ut, suscipit at, pharetra
        vitae, orci. Morbi scelerisque luctus velit. Curabitur ligula sapien,
        pulvinar a vestibulum quis, facilisis vel sapien. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis risus.
      </p>

      <p className={middle}>
        Sed convallis magna eu sem. Nunc dapibus tortor vel mi dapibus
        sollicitudin. Phasellus enim erat, vestibulum vel, aliquam a, posuere
        eu, velit. Fusce suscipit libero eget elit. In rutrum. Etiam neque.
        Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et
        sollicitudin sem purus in lacus. Nullam sit amet magna in magna gravida
        vehicula. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis
        vel sapien. Sed elit dui, pellentesque a, faucibus vel, interdum nec,
        diam. Phasellus faucibus molestie nisl. Suspendisse nisl. Pellentesque
        sapien. Nulla est. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos hymenaeos. Mauris dictum facilisis augue.
        Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Proin in
        tellus sit amet nibh dignissim sagittis. Fusce tellus odio, dapibus id
        fermentum quis, suscipit id erat. Nullam rhoncus aliquam metus.
      </p>
    </div>
  );
};
