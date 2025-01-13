interface Props {
  title: string;
  description: string;
}

export function DescriptionSkills({ title, description }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold uppercase">{title}</div>
      <div className="font-light">{description}</div>
    </div>
  );
}
