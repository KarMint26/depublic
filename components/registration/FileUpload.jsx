"use client"

import { MdOutlineFileUpload } from "react-icons/md";

export default function FileUpload({ chosenFile, setChosenFile, typeFile, textName }) {
  return (
    <div className="field-data-input flex flex-col gap-2 Mobile-M:gap-3 w-full mt-5 mb-2">
      <p className="text-[0.65rem] Mobile-M:text-xs text-primary font-medium">
        {textName}
      </p>
      <div className="relative">
        <input
          type="file"
          name={`${typeFile}-upload`}
          id={`${typeFile}-upload`}
          className="absolute opacity-0 z-10"
          onChange={(event) => {
            const fileName = event.target.files[0].name;
            setChosenFile(fileName);
          }}
        />
        <div className="relative w-full bg-[#F5F0F6] outline-none border-none rounded-[8px] px-2 py-3 text-xs Mobile-M:text-sm">
          <label
            htmlFor="ktp-upload"
            className="bg-primary relative text-white  rounded-[8px] p-2 pl-10 pr-6 text-[0.65rem] Mobile-M:text-xs w-full font-bold"
          >
            Choose File
          </label>
          <MdOutlineFileUpload className="absolute text-lg text-white left-6 top-[0.8rem] z-10 cursor-pointer" />
          <p
            id={`file-chosen-${typeFile}`}
            className="text-[#4D4D4D] text-xs Mobile-M:text-sm absolute left-[10rem] top-[0.8rem]"
          >
            {chosenFile}
          </p>
        </div>
      </div>
      <p className="text-[0.55rem] Mobile-M:text-[0.65rem]">
        Uploaded image will be resized to fit within: Width of 500 pixels and
        Height of 500 pixels
      </p>
    </div>
  );
}
