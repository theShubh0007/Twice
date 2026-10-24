import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/data";
import Modal from "../components/Modal";

export default function Teams() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [open, setOpen] = useState(false);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };

  return (
    <>
      <section id="teams" className="relative pt-16 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6.75">
                {teamMembers.slice(0, 2).map((member) => (
                  <div
                    key={member.id}
                    className={member.id === 2 ? "lg:mt-24.75" : ""}
                    onClick={() => handleMemberClick(member)}
                  >
                    <TeamCard {...member} />
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6 lg:mt-15">
              <SectionHeading title="team" textColor="text-black" />
              <p className="mt-6 text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo vel in harum itaque? Neque veritatis ea asperiores
                totam perspiciatis quia accusantium temporibus fuga delectus
                dolor?
              </p>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam neque cupiditate quia eum? Quibusdam asperiores, numquam
                nostrum accusamus vitae aspernatur cum esse? Repellat libero
                tenetur, quas illum ut dolore explicabo?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(2, 6).map((member) => (
              <div key={member.id} onClick={() => handleMemberClick(member)}>
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal open={open} setOpen={setOpen} member={selectedMember} />
    </>
  );
}
