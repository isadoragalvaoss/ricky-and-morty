import { ICharacter, ResponseGetAllCharacter } from "@/models/character";
import CardItem from "../CardItem";
import { CardContainer } from "./Cards.styles";

interface CardProps {
  data: ResponseGetAllCharacter | ICharacter[];
}
export const Cards = ({ data }: CardProps): JSX.Element => {
  const isResponse = (data as ResponseGetAllCharacter).info !== undefined;
  const characters = isResponse
    ? (data as ResponseGetAllCharacter).results
    : (data as ICharacter[]);

  return (
    <CardContainer maxWidth="md">
      {characters.map((item) => (
        <CardItem item={item} key={item.id} />
      ))}
    </CardContainer>
  );
};

export default Cards;
