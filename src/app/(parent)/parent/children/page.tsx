import { SectionManageMutqin } from "@/components/pages/parent/mutqin/SectionManageMutqin";
import { caller } from "@/server/serverClient";
import ParentMutqinContainer from "@/components/pages/parent/container/ParentMutqinContainer";

export const revalidate = 0;

async function MutqinPage() {

  return (
    <ParentMutqinContainer>
      <SectionManageMutqin />
    </ParentMutqinContainer>
  );
}

export default MutqinPage;
