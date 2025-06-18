// hooks/useHafalan.ts

import { trpc } from "@/server/client";

type HafalanProps = {
  student_id: number;
  year: number;
  month: number;
};

export const useHafalan = ({ student_id, year, month }: HafalanProps) => {
  return trpc.getHafalanByMonth.useQuery(
    { student_id, year, month },
    {
      enabled: !!student_id,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
};

export const useMurojah = ({ student_id, year, month }: HafalanProps) => {
  return trpc.getMurojahByMonth.useQuery(
    { student_id, year, month },
    {
      enabled: !!student_id,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
};
