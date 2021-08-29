import { ProjectProps, ProjectKey } from '@/interfaces/interface';

const motivation: ProjectProps = {
  title: 'Motivational Speech Wallpaper',
  img: '/static/motivational.png',
  stacks: ['Html', 'CSS', 'JavaScript'],
  desc: 'DOM操作に慣れるためのプロジェクト。『画像URL、文字列、垂直方向(top, center, bottom)、水平方向(left, center, right)』を受け取り、指定した位置の画像に重ねて表示する。',
  githubUrl: 'https://github.com/soysan/Motivational-Speech-Wallpaper',
  projectUrl: 'https://soysan.github.io/Motivational-Speech-Wallpaper/',
};
const emotion: ProjectProps = {
  title: 'Emotion Onomatopoeia Dictionary',
  img: '/static/emotion.png',
  stacks: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
  desc: '感情を表現するカードをクリックすると、その擬音カードのセクションへジャンプする。文字列キーとEmotionObjectのハッシュマップ、連想配列である辞書（単語：説明）、写真用辞書（単語：画像URL）を使用して効率的にレンダリングするプロジェクト。',
  githubUrl: 'https://github.com/soysan/Emotion-Onomatopoeia-Dictionary',
  projectUrl: 'https://soysan.github.io/Emotion-Onomatopoeia-Dictionary/',
};
const vending: ProjectProps = {
  title: 'Vending Machine',
  img: '/static/vending.png',
  stacks: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
  desc: '自販機のアプリ。商品番号をクリックし商品を買う。商品画像が商品番号を変える（ボタンを押す）たびにスライドして選択した商品を表示するプロジェクト。',
  githubUrl: 'https://github.com/soysan/Vending-Machine',
  projectUrl: 'https://soysan.github.io/Vending-Machine/',
};
const battery: ProjectProps = {
  title: 'Battery Finder Program',
  img: '/static/battery.png',
  stacks: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
  desc: 'カメラブランドとモデルそれぞれのオブジェクトリスト内と消費電力を0 <= x =< 100 の範囲でユーザーがスペックを選択し、条件にあったバッテリーが画面に表示される。条件に合わない場合はエラーメッセージが表示される。データ構造のハッシュマップを使い効率的にリストへアクセスし、重複を削除。バッテリーの容量によりソートして出力されるプロジェクト。',
  githubUrl: 'https://github.com/soysan/Battery-Finder-Program',
  projectUrl: 'https://soysan.github.io/Battery-Finder-Program/',
};
const computer: ProjectProps = {
  title: 'Computer Builder',
  img: '/static/computer.png',
  stacks: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
  desc: 'CPU, GPU, RAM, Storageを選択し、画面に選択したスペックのPCを出力する。APIを使用して非同期処理でデータを取得。PCのスペックを各項目選択。ADDボタンを押し、画面下部に出力する。JSONの扱い。Promiseオブジェクトの扱い。Lambda関数の使用。ハッシュマップを使用し重複の削除。MVCモデルに沿った設計。',
  githubUrl: 'https://github.com/soysan/Computer-Builder',
  projectUrl: 'https://soysan.github.io/Computer-Builder/',
};
const pomodoro: ProjectProps = {
  title: 'Pomodoro Steps',
  img: '/static/pomodoro.png',
  stacks: ['Swift', 'CocoaPods'],
  desc: 'シンプルなタイマーアプリ。グラフや数字ではなく色や音で知らせるようにしている。作業に集中してほしいため、25分と50分のモードがある。',
  githubUrl: 'https://github.com/soysan/Pomodoro',
  projectUrl: 'https://apps.apple.com/jp/app/pomodoro-steps/id1560668976?l=en',
};
const clicker: ProjectProps = {
  title: 'Clicker Empire Game',
  img: '/static/clicker.png',
  stacks: ['React', 'Material-UI', 'JavaScript', 'CSS', 'Html'],
  desc: 'ハンバーガーをクリックしてお金を稼ぎ、アイテムを買って富豪になっていくゲーム。localStorageにデータを保存、削除。React Hooksを使って状態管理、フォルダを細かく分けて見やすいようにしている。',
  githubUrl: 'https://github.com/soysan/Clicker-Empire-Game',
  projectUrl: 'https://clicker-empire-game-one.vercel.app',
};
const portfolio: ProjectProps = {
  title: 'Mt-Dev',
  img: '/static/portfolio.png',
  stacks: ['Next.js', 'React', 'Material-UI', 'TypeScript', 'CSS', 'Html'],
  desc: 'このポートフォリオ。色の管理、型（interface）、componentsをファイルで分けて管理。Eslint, Prettierを使用してコード規則を設定し見やすくしている。',
  githubUrl: 'https://github.com/soysan/Mt-Dev',
  projectUrl: 'https://mt-dev.vercel.app/',
};

export const ProjectsData: ProjectKey = {
  motivation: motivation,
  emotion: emotion,
  vending: vending,
  battery: battery,
  computer: computer,
  pomodoro: pomodoro,
  clicker: clicker,
  portfolio: portfolio,
};

export const projectKeys: string[] = [
  'motivation',
  'emotion',
  'vending',
  'battery',
  'computer',
  'pomodoro',
  'clicker',
  'portfolio',
];
