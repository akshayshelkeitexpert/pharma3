import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core'
import { AuthService } from '../services/auth/auth.service';
@Directive({
    selector: '[hasPermission]'
})
export class HasPermissionDir implements OnInit {
    public static instanceOf: HasPermissionDir
    private requestedRoles: string[];

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authService: AuthService) {
    }

    @Input() set hasPermission(requestedRoles: string[]) {
        this.requestedRoles = requestedRoles;
    }

    ngOnInit() {
        let hasPermission = this.authService.checkAuthRole(this.requestedRoles);
        if (hasPermission) {
            this.viewContainer.createEmbeddedView(this.templateRef)
        } else {
            this.viewContainer.clear();
        }
    }
}