import SertificateComponent from "@/components/pages/guru/mutqin/SertificateComponent";
import { caller } from "@/server/serverClient";

export default async function SertifikatTemplate({
  params,
}: {
  params: Promise<{ student_id: string, student_juz:string }>;
}) {
  const { student_id, student_juz } = await params;
  const students = await caller.getStudent({ student_id: Number(student_id) });

  return (
    <>
    {student_juz}
      <SertificateComponent name={students?.name || "-"} juz={student_juz} />
    </>
  );
}
