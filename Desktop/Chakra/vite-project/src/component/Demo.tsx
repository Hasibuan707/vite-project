import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";

const Demo = () => {
  return (
    <HStack>
      <Button bgColor={"skyblue"}>Click me</Button>
      <Button bgColor={"pink.200"}>Click me</Button>
    </HStack>
  );
};

export default Demo;
