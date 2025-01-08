interface Props {
  title: string;
  description: string;
}

export function DescriptionSkills({ title, description }: Props) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='font-bold'>{title}</div>
      <div>{description}</div>
    </div>
  );
}
