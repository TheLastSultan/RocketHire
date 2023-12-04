import ViewContainer from "@/components/pages/Views/View";

interface ViewProps {
  params: { viewId: string | undefined };
}

export default function View({ params: { viewId } }: ViewProps) {
  return <ViewContainer />;
}
