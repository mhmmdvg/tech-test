/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from 'react';
import InputSelect from '../components/Select';
import { InputSelectType } from '../types';
import { options } from '../constants/options';
import NoProfileIcon from '../assets/no-profile-icon';
import Toast from '../components/Toast';

const initialState = {
  aspek_penilaian_1: {
    mahasiswa_1: 1,
    mahasiswa_2: 1,
    mahasiswa_3: 1,
    mahasiswa_4: 1,
    mahasiswa_5: 1,
    mahasiswa_6: 1,
    mahasiswa_7: 1,
    mahasiswa_8: 1,
    mahasiswa_9: 1,
    mahasiswa_10: 1,
  },
  aspek_penilaian_2: {
    mahasiswa_1: 1,
    mahasiswa_2: 1,
    mahasiswa_3: 1,
    mahasiswa_4: 1,
    mahasiswa_5: 1,
    mahasiswa_6: 1,
    mahasiswa_7: 1,
    mahasiswa_8: 1,
    mahasiswa_9: 1,
    mahasiswa_10: 1,
  },
  aspek_penilaian_3: {
    mahasiswa_1: 1,
    mahasiswa_2: 1,
    mahasiswa_3: 1,
    mahasiswa_4: 1,
    mahasiswa_5: 1,
    mahasiswa_6: 1,
    mahasiswa_7: 1,
    mahasiswa_8: 1,
    mahasiswa_9: 1,
    mahasiswa_10: 1,
  },
  aspek_penilaian_4: {
    mahasiswa_1: 1,
    mahasiswa_2: 1,
    mahasiswa_3: 1,
    mahasiswa_4: 1,
    mahasiswa_5: 1,
    mahasiswa_6: 1,
    mahasiswa_7: 1,
    mahasiswa_8: 1,
    mahasiswa_9: 1,
    mahasiswa_10: 1,
  },
};

function Home() {
  const [select, setSelect] = useState<InputSelectType>(initialState);
  const [toast, setToast] = useState<boolean>(false);

  const onChangeHandle = (e: ChangeEvent<HTMLSelectElement>, key: string) => {
    setSelect((prevData: any) => ({
      ...prevData,
      [e.target.name]: {
        ...prevData[e.target.name],
        [key]: Number(e.target.value),
      },
    }));
  };

  const saveSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const data = JSON.stringify(select)
    setToast(true);
    console.log(select);
    setTimeout(() => setToast(false), 2500);
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <form className="flex flex-col space-y-3" onSubmit={saveSubmit}>
          {options.map((index) => (
            <div
              key={index}
              className="flex flex-row space-x-5 border-gray-400 border rounded p-2 items-center"
            >
              <div className="flex flex-row space-x-2 items-center">
                <NoProfileIcon />
                <p>Mahasiswa {index}</p>
              </div>
              <InputSelect
                name="aspek_penilaian_1"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  onChangeHandle(e, `mahasiswa_${index}`)
                }
              />
              <InputSelect
                name="aspek_penilaian_2"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  onChangeHandle(e, `mahasiswa_${index}`)
                }
              />
              <InputSelect
                name="aspek_penilaian_3"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  onChangeHandle(e, `mahasiswa_${index}`)
                }
              />
              <InputSelect
                name="aspek_penilaian_4"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  onChangeHandle(e, `mahasiswa_${index}`)
                }
              />
            </div>
          ))}

          <input
            className="py-2 px-1 w-20 bg-black text-white cursor-pointer self-end"
            type="submit"
            value="Simpan"
          />
        </form>

        {toast ? <Toast>Berhasil! Check Console Anda</Toast> : null}
      </div>
    </>
  );
}

export default Home;
