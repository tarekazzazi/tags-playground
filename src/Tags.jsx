import "./tags.css";
import React, { useState } from "react";
function Tags() {
  // local state
  const [inputVal, setInputVal] = useState();
  let [SavedTags, setSavedTags] = useState([]); // Eventually convert this to serverStorage using axios

  const tagContainer = document.querySelector(".tag-container");
  const input = document.querySelector(".tag-container input");

  const createTag = (label) => {
    const div = document.createElement("div");
    div.setAttribute("class", "tag"); // try to condese this at end if possible mabye local state?

    const span = document.createElement("span");
    span.innerHTML = label; // try to condese this at end if possible mabye local state?
    const closeBtn = document.createElement("i"); // try to condese this at end if possible mabye local state?

    closeBtn.setAttribute("class", "material-icons"); // try to condese this at end if possible mabye local state?
    closeBtn.innerHTML = "close"; // try to condese this at end if possible mabye local state?
    closeBtn.setAttribute("data-item", label);

    div.appendChild(span); // try to condese this at end if possible mabye local state?
    div.appendChild(closeBtn); // try to condese this at end if possible mabye local state?
    return div;
  };

  // removes duplicate tags
  function reset() {
    document.querySelectorAll(".tag").forEach(function (tag) {
      tag.parentElement.removeChild(tag);
    });
  }

  // Loops through array of entered tags and appends them to the dom
  const addTags = () => {
    reset();
    SavedTags.slice()
      .reverse()
      .forEach(function (tag) {
        const input = createTag(tag);
        tagContainer.prepend(input);
      });
  };
  // Appends tag that is typed on keyUp or enter
  const onSubmit = (e) => {
    if (e.key === "Enter") {
      SavedTags.push(inputVal);
      addTags();
      input.value = "";
    }
  };

  document.addEventListener("click", function (e) {
    // console.log(e.target.tagName);
    if (e.target.tagName === "I") {
      const value = e.target.getAttribute("data-item");
      console.log(value);
      const index = SavedTags.indexOf(value);
      console.log(index);
      SavedTags = [...SavedTags.slice(0, index), ...SavedTags.slice(index + 1)];
      console.log(SavedTags);
      addTags();
    }
  });

  console.log(SavedTags);
  return (
    <div className="container">
      <div className="tag-container">
        <input
          onKeyUp={onSubmit}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Tags;
