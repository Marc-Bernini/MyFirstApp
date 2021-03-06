import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/class/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {
  }

}
