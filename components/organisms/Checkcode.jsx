import AnchorTag from "../atoms/anchorTag";
import Container from "../atoms/Container";
import Heading from "../atoms/Heading";
import { CiFileOn } from "react-icons/ci";


function Checkcode() {
    return (
        <Container>

            <div className="flex bg-[rgb(247,246,247)] border-t-[rgb(255,106,40)] mt-[20px] border-t-[3px] check py-[15px] px-[10px] items-center">
                <CiFileOn />

                <Heading level="6"> Returning customer?

                </Heading>
                <AnchorTag variant="check">Click here to enter your code</AnchorTag>

                <div>

                </div>
            </div>
        </Container>
    )
}

export default Checkcode;