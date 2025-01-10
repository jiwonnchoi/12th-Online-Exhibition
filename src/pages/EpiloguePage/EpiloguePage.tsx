import React, { useState } from 'react';
import * as S from './EpiloguePage.style';
import Category from './components/Category';
import EpilogueBox from './components/EpilogueBox';
import { epilogueData } from 'assets/data/epilogueData';
import { ReactComponent as Close } from 'assets/icons/close.svg';

const categories = Object.keys(epilogueData);

const EpiloguePage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>(categories[0]);
  const [openBoxId, setOpenBoxId] = useState<number | null>(null);

  const selectedData = epilogueData[selectedCategory] || [];

  return (
    <S.Wrapper>
      <Close />
      <S.Title>OUR STORY</S.Title>
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <S.Container2>
        {selectedData.map((item) => (
          <EpilogueBox
            key={item.id}
            item={item}
            isOpen={openBoxId === item.id}
            onToggle={() => setOpenBoxId(openBoxId === item.id ? null : item.id)}
          />
        ))}
      </S.Container2>
    </S.Wrapper>
  );
};

export default EpiloguePage;
