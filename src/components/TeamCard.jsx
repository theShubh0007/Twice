export default function TeamCard(member) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={member.img}
        alt="team_member"
        className=" w-full aspect-333/500 object-cover"
      />
      <p className="mt-4 font-semibold ">{member.name}</p>
      <p className="mt-2 text-zinc-400">{member.role}</p>
    </div>
  );
}
