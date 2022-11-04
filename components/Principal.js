import Image from 'next/image';
import PrincipalImg from '../public/assets/profile-imgs/principle.JPG';

export default function Principal() {
  return (
    <div id="principal" className="py-8 md:py-16 px-8 sm:px-24">
      <h1 className="text-center text-5xl font-medium mb-16">The Principal</h1>
      <div className="flex  items-center flex-col gap-8 md:gap-16 bg-theme-grey text-white rounded-md p-6 md:p-12">
        <div className="relative w-48 h-fit rounded-full overflow-hidden">
          <Image src={PrincipalImg} layout="responsive" objectFit="contain" />
        </div>
        <div className="flex flex-col gap-4 font-normal">
          <p>
            Claire Chorley began Dancing at the Neale Academy of Dance in
            Coventry at the age of five. She soon discovered a love for dancing
            and took her exams, competed in Festivals and performed in shows
            until the age of twenty three. She then decided to open her own
            dance school.
          </p>
          <p>
            As well as being a member of The Neale Academy of Dance, at the age
            of seventeen she became a member of The Coventry Youth Dance. It is
            here she discovered her love for Contemporary Dance which we can all
            see in her Choreography today.
          </p>
          <p>
            Claire&apos;s pupils all compete in Festivals three times a year and
            regularly win numerous medals and trophies. She never picks her
            "best" pupils to take part in competitions and shows. She firmly
            believes all children, regardless of their talent, should be given
            the opportunity to perform in front of an audience.
          </p>
          <p>
            Claire works hard to instil confidence into all her pupils and
            believes this is the most important part of her quest. She is very
            proud of her pupils and never tires of teaching them. Year after
            year she strives to improve their Dance technique and is very
            satisfied with their progress.
          </p>
        </div>
      </div>
    </div>
  );
}
