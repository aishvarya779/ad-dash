import React from 'react';
import Layout from '../components/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          p: 2,
          textAlign: 'center',
          '& h4': {
            fontWeight: 700,
            my: 2,
          },
          '& p': {
            textAlign: 'justify',
            fontSize: '1.4rem'
          },
        }}
      >
        <Typography variant="h4">Welcome to Ad World</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          exercitationem saepe dicta, laudantium modi facilis fugit quam
          repellat mollitia vero qui tempore aut inventore adipisci, eaque
          perferendis? Quasi corrupti nemo voluptas repellendus maxime veniam
          numquam soluta sint itaque porro, adipisci veritatis deleniti quia.
          Ipsa ipsum rem explicabo ex delectus eum, aliquam voluptatibus
          nesciunt et fugit ut odit consequuntur, reprehenderit modi soluta
          praesentium porro optio, ab cupiditate eius harum. Velit sequi id,
          consectetur nulla quia sit corrupti, porro cum nostrum odio vel magnam
          quas dolores ipsa illo voluptatum aperiam perspiciatis, quisquam in
          praesentium pariatur fuga fugiat. Eligendi voluptate odit facere
          distinctio?
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          perferendis! Facere, alias tenetur nulla est tempora exercitationem
          praesentium molestias maxime, rerum ipsum fugiat, quis nemo eos
          officiis nisi sequi possimus dolor laboriosam reprehenderit saepe esse
          nostrum qui! Vel adipisci id cumque explicabo nesciunt, dolor porro
          saepe odit accusamus tenetur sint illo culpa fuga ullam in est modi
          laboriosam maxime, exercitationem assumenda ducimus laudantium quas
          officiis reprehenderit! Quae ipsam possimus velit blanditiis sequi
          voluptatem aspernatur harum, delectus corporis ex molestias fugit sunt
          tempore, sed natus similique deleniti quis qui rerum distinctio
          debitis nobis? Reprehenderit quod error tempore amet magnam
          exercitationem maiores!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          quaerat corrupti recusandae, quibusdam repudiandae minima, deleniti
          voluptas placeat alias voluptatibus doloribus pariatur facere
          consectetur a reprehenderit. Rerum excepturi reiciendis culpa? Debitis
          at, quia nihil iste harum, quis voluptatem a porro, unde non tempore
          quos ipsa ea dolorum laboriosam. Quidem, repudiandae? Nobis ducimus
          quisquam non adipisci natus magni exercitationem eos, culpa,
          consectetur consequuntur eligendi quae aliquid quod, nostrum iste. Quo
          dignissimos maxime quae quasi voluptatum fugiat deleniti veniam in ex
          recusandae delectus quibusdam, laudantium iste ullam! Error
          repudiandae atque, quas neque ab maiores possimus vero nulla aut
          aspernatur libero ipsa voluptatem at recusandae cumque, sit dolor
          exercitationem asperiores inventore? Facere adipisci laudantium
          quaerat voluptate quis, nesciunt commodi blanditiis, laboriosam itaque
          ab voluptates vero accusantium quas ex voluptas optio pariatur! Nulla
          maiores eum exercitationem voluptates, quae error, autem asperiores
          nisi voluptatem quas ullam nesciunt aspernatur illo quam at veniam
          corporis corrupti fugit.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
