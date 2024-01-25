import WindowTitlebar from '@/components/titlebar/window-titlebar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import useExists from '@/hooks/useExists';
import downloadAndSaveFile from '@/lib/download-and-save-file';
import { BaseDirectory, createDir, removeDir } from '@tauri-apps/api/fs';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const InitSettingProvider = ({ children }: { children: React.ReactNode }) => {
  const { bool: prevBool } = useExists('');
  const { bool: bool1, checkExists: check1 } = useExists(
    'extensions/server.exe'
  );
  const { bool: bool2, checkExists: check2 } = useExists(
    'extensions/prompt.json'
  );
  const { bool: bool3, checkExists: check3 } = useExists(
    'extensions/prompt.txt'
  );
  const [progress, setProgress] = useState(0);

  const [initDownloadLoading, setInitDownloadLoading] =
    useState<boolean>(false);

  const serverDownloadUrl =
    'https://qjpzemdbvnmikrzvecmd.supabase.co/storage/v1/object/public/extension/public/server.exe';
  const jsonDownloadUrl =
    'https://qjpzemdbvnmikrzvecmd.supabase.co/storage/v1/object/public/extension/public/prompt.json';
  const txtDownloadUrl =
    'https://qjpzemdbvnmikrzvecmd.supabase.co/storage/v1/object/public/extension/public/prompt.txt';

  if (!bool1 || !bool2 || !bool3) {
    return (
      <div>
        <WindowTitlebar />

        <Card className='m-4'>
          <CardHeader>
            <CardTitle>초기 설정 파일이 필요합니다.</CardTitle>
            <CardDescription>
              초기 설정 파일을 다운로드 해 주세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Button
                disabled={initDownloadLoading}
                className='active:scale-95 transition duration-200'
                onClick={async () => {
                  setInitDownloadLoading(true);

                  // if (prevBool) {
                  //   // 그 전 파일 존재 시 전부 삭제
                  //   await removeDir('', {
                  //     dir: BaseDirectory.AppData,
                  //     recursive: true,
                  //   });
                  // }

                  setProgress(10);

                  try {
                    // 폴더 생성
                    await createDir('', {
                      dir: BaseDirectory.AppData,
                      recursive: true,
                    });
                  } catch {
                    console.log('이미 기본폴더가 존재합니다.');
                  }

                  try {
                    // 다시 폴더 생성
                    await createDir('extensions', {
                      dir: BaseDirectory.AppData,
                      recursive: true,
                    });
                  } catch {
                    console.log('이미 extensions폴더가 존재합니다.');
                  }

                  setProgress(15);

                  if (!bool1)
                    await downloadAndSaveFile(serverDownloadUrl, 'server.exe');

                  setProgress(65);

                  if (!bool2)
                    await downloadAndSaveFile(jsonDownloadUrl, 'prompt.json');

                  setProgress(80);

                  if (!bool3)
                    await downloadAndSaveFile(txtDownloadUrl, 'prompt.txt');

                  setProgress(100);

                  await check1();
                  await check2();
                  await check3();

                  setInitDownloadLoading(false);
                }}
              >
                {initDownloadLoading ? (
                  <ClipLoader color='hsla(168, 67%, 53%, 1)' size={16} />
                ) : (
                  '다운로드 시작'
                )}
              </Button>
              {initDownloadLoading ? (
                <Progress value={progress} className='w-[80%] mt-4' />
              ) : null}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};

export default InitSettingProvider;
