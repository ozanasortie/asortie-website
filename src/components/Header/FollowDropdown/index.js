import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";

export default function FollowDropdown({ small }) {
  return (
    <Popover trigger="hover">
      <PopoverTrigger className="w-auto">
        <span
          className={`ml-6 max-md:hidden ${
            small ? "text-black" : "text-white"
          } text-sm cursor-pointer`}
          href={"/"}
        >
          TAKİP ET
        </span>
      </PopoverTrigger>
      <PopoverContent
        w={"100vw"}
        mt={9}
        border={0}
        borderRadius={0}
        py={1}
        background={"#a67f5e"}
      >
        <PopoverBody className="flex justify-center items-center">
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              Youtube
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              Instagram
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
          <div className="flex items-center py-1.5 cursor-pointer mr-5 group">
            <div className="text-white relative">
              Facebook
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
