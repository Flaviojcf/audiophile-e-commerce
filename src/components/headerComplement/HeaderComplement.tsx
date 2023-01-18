interface HeaderComplement {
  section: string;
}

export function HeaderComplement({ section }: HeaderComplement) {
  return (
    <div className="flex items-center justify-center bg-black h-60 ">
      <h1 className="text-5xl font-bold leading-10 tracking-[1.43px] text-white uppercase tablet:text-3xl">
        {section}
      </h1>
    </div>
  );
}
